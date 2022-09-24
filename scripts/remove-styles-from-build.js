const fs = require("fs");

console.log('Iniciando alteração no angular.json');
fileContent = fs.readFileSync("angular.json");
const angularObject = JSON.parse(fileContent.toString());
console.log('Arquivo lido com sucesso');
delete angularObject.projects.lib.architect.build.options['styles'];
delete angularObject.projects.lib.architect.build.options['scripts'];
fs.writeFileSync("angular.json", JSON.stringify(angularObject));
console.log('Alteração no angular.json finalizada');
