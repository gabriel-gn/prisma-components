#!/bin/bash

# checa os argumentos passados para o script
(( "$#" )) || { echo "Error: Need to provide '-c' flag" >&2; exit 1; }

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
    echo "Valid component name: $component"
elif [[ ${component:0:1} == [a-z] ]]; then
    echo "Invalid component name: $component. Please use Uppercase as first character";
    exit 1;
else
    echo "Please use a valid component name";
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

filenamePath=${PWD}/src/components/${componentDir}/${componentKebabName}
echo "componentPath: ${componentPath}"
# Executa os comandos de criação de módulo e componente do angular
ngscript="ng generate module $componentPath --project=lib"
echo "$ngscript"
ngscriptoutput=$(eval "$ngscript")
echo "$ngscriptoutput"

ngscript="ng generate component $componentPath --project=lib --export=true"
echo "$ngscript"
ngscriptoutput=$(eval "$ngscript")
echo "$ngscriptoutput"

# Copia os stories para as pastas que precisa
scriptDir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
cp ${scriptDir}/stories/default.mdx "${filenamePath}.stories.mdx"
cp ${scriptDir}/stories/default.ts "${filenamePath}.stories.ts"
echo "Stories created"

# altera os stories default com os valores novos de acordo com o componente criado
filesToEdit=("${filenamePath}.stories.ts" "${filenamePath}.stories.mdx")
for i in "${!filesToEdit[@]}"; do
    sed -i '' -e "s/XXXTitle/$component/g" "${filesToEdit[$i]}"
    sed -i '' -e "s/XXXComponent/${component}Component/g" "${filesToEdit[$i]}"
    sed -i '' -e "s/XXXModule/${component}Module/g" "${filesToEdit[$i]}"
    sed -i '' -e "s/XXXName/${componentKebabName}/g" "${filesToEdit[$i]}"
    sed -i '' -e '1d' "${filesToEdit[$i]}"  # remove a primeira linha que é um ts-ignore
done
echo "Stories edited"

# adiciona os exports no public.api para uso do módulo em outros projetos
# echo -e "\n" >> src/public-api.ts
echo -e "export * from './components/$componentDir/${componentKebabName}.component';" >> src/public-api.ts
echo -e "export * from './components/$componentDir/${componentKebabName}.module';" >> src/public-api.ts
echo "Module and Component exported on 'public-api.ts'"

# altera o arquivo html e scss para conter uma classe com o nome do novo componente
sed -i '' -e '1d' "${filenamePath}.component.html"  # remove a primeira do html
# adiciona o texto que vai no html com a classe
echo -e "<div class=\"pm-${componentKebabName}\">\n  ${component} component created successfully!\n</div>" >> "${filenamePath}.component.html"
# adiciona uma nova classe no scss do componente com o mesmo nome dele
echo -e ".pm-${componentKebabName} {\n\n}" >> "${filenamePath}.component.scss"
echo "Html and Scss files edited"
