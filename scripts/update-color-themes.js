const fs = require("fs");
const sass = require('node-sass');

const getDirectories = (source) => {
  return fs.readdirSync(source, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);
}

const themesPath = 'src/styles/themes'
const themes = getDirectories(themesPath);

for (const themeName of themes) {
  const themeVariables = fs.readFileSync(`${themesPath}/${themeName}/_variables.scss`).toString('utf8');
  let themeSass = fs.readFileSync(`${themesPath}/${themeName}/theme.scss`).toString('utf8');
  themeSass = themeSass.replace('@import "variables";', themeVariables);
  const sassResult = sass.renderSync({
    data: themeSass
  }).css.toString();

  let sassJson = sassResult.substring(sassResult.lastIndexOf(':root') + ':root'.length);
  sassJson = sassJson
    .split(':').join('":"')
    .split(';').join('",')
    .split('{').join('').split('}').join('')
    .split('--').join('"')
    .split(' ').join('')
    .split('toleft').join('to left')
    .split('toright').join('to right')
    .split('totop').join('to top')
    .split('tobottom').join('to bottom')
  ;
  sassJson = JSON.parse(`{${sassJson.substring(0, sassJson.length - 2)}}`)
  console.log(`'${themeName}' theme conversion to JSON completed.`);
  console.log(`css variables for '${themeName}' theme: ${Object.keys(sassJson).length}`);
  //console.log(sassJson);

  // Daqui pra frente substitui as "export const" dos temas para os valores atualizados
  const getAllIndexes = (arr, val) => {
    const indexes = [];
    let i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i);
    }
    return indexes;
  };

  const getNumberAfterCertainValue = (arrOfValues, value) => {
    for (const val of arrOfValues) {
      if (val >= value) {
        return val
      }
    }
  }

  const servicePath = `src/services/color-theme/color-theme.service.ts`;
  const themeServiceFile = fs.readFileSync(servicePath).toString('utf8');
  const objStartIndexes = getAllIndexes(themeServiceFile, '{')
  const objEndIndexes = getAllIndexes(themeServiceFile, '}')
  // console.log(objStartIndexes);
  // console.log(objEndIndexes);
  const themeConstName = `${themeName}Theme`;
  const themeConstIndex = themeServiceFile.indexOf(themeConstName) + themeConstName.length;
  const modifiedFile =
    themeServiceFile.substring(0, getNumberAfterCertainValue(objStartIndexes, themeConstIndex))
    + JSON.stringify(sassJson)
    + themeServiceFile.substring(getNumberAfterCertainValue(objEndIndexes, themeConstIndex) + 1)
  ;
  fs.writeFileSync(servicePath, modifiedFile);
  console.log('Themes variables updated!')
}
