const shell = require("shelljs");

const filesToRevert = [
  'angular.json',
  'src/services/color-theme/color-theme.service.ts'
]

filesToRevert.forEach(filePath => {
  shell.exec(`git checkout -- ${filePath}`);
})
console.log(`Alteração nos arquivos ${filesToRevert} revertidos`);
