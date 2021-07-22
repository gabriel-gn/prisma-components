#!/bin/bash

# checa os argumentos passados para o script
(( "$#" )) || { echo "Erro: Necessário fornecer o argumento '-c'" >&2; exit 1; }

# Atribui os argumentos passados ao script para variáveis
while getopts c: flag
do
    case "${flag}" in
        c) componentPath="${OPTARG}";;
    esac
done

# Caso o nome seja separado por "/", pega o último como nome do componente e coloca letra maiúscula
pathArray=(${componentPath//\// })
pathArrayLen=$((${#pathArray[@]}-1))
componentName=${pathArray[$pathArrayLen]}
componentKebabName=$(echo $componentName \
     | sed 's/\(.\)\([A-Z]\)/\1-\2/g' \
     | tr '[:upper:]' '[:lower:]')
component="$(tr '[:lower:]' '[:upper:]' <<< ${componentName:0:1})${componentName:1}"

# Caso a primeira letra não seja maiúscula dá erro
if [[ "${component:0:1}" == [A-Z] ]]; then
    echo "Nome de componente válido: $component"
elif [[ ${component:0:1} == [a-z] ]]; then
    echo "Nome de componente inválido: $component. Utilize letra maiúscula como primeiro caractere";
    exit 1;
else
    echo "Utilize um nome de componente válido!";
    exit 1;
fi

# Junta o path name novamente e cria um path dir
componentPath=""
componentDir=""
for i in "${!pathArray[@]}"; do
    if [[ $i != $pathArrayLen ]]; then
      componentPath+="${pathArray[$i]}/"
      componentDir+="${pathArray[$i]}/"
    else
      componentPath+="${component}"
      componentDir+="${componentKebabName}"
    fi
done

# Executa os comandos de criação de módulo e componente do angular
ngscript="ng generate module $componentPath --project=components"
echo "$ngscript"
ngscriptoutput=$(eval "$ngscript")
echo "$ngscriptoutput"

ngscript="ng generate component $componentPath --project=components"
echo "$ngscript"
ngscriptoutput=$(eval "$ngscript")
echo "$ngscriptoutput"

# Copia os stories para as pastas que precisa
storiesFilenamePath=${PWD}/projects/components/src/lib/${componentDir}/${componentKebabName}
cp ./stories/default.mdx "${storiesFilenamePath}.stories.mdx"
cp ./stories/default.ts "${storiesFilenamePath}.stories.ts"
echo "Stories created"

# altera os stories default com os valores novos de acordo com o componente criado
filesToEdit=("${storiesFilenamePath}.stories.ts" "${storiesFilenamePath}.stories.mdx")
for i in "${!filesToEdit[@]}"; do
  sed -i '' -e "s/XXXTitle/$component/g" "${filesToEdit[$i]}"
  sed -i '' -e "s/XXXComponent/${component}Component/g" "${filesToEdit[$i]}"
  sed -i '' -e "s/XXXModule/${component}Module/g" "${filesToEdit[$i]}"
  sed -i '' -e "s/XXXName/${componentKebabName}/g" "${filesToEdit[$i]}"
  sed -i '' -e '1d' "${filesToEdit[$i]}"  # remove a primeira linha que é um ts-ignore
done
echo "ts stories edited"
