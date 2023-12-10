import { regexPatterns } from 'regexPatterns'

import { missingItemsOnSecondArray } from './missingItemsOnSecondArray'
import { objectKeys } from './objectConstructor'

export const getHandlebarVariablesListFromText = (texto: string) => {
  const foundedVariables = texto.match(regexPatterns.handlebarVariable) || []

  if (!foundedVariables)
    throw new Error('The entered text has no handlebar variables.')

  return foundedVariables.map(
    handleBarVariable => handleBarVariable.match(/\w+/)![0],
  )
}

export const applyVariablesOnTextWithHandlebarVariables = (
  text: string,
  variables: {
    [variableName: string]: string | number
  },
): string => {
  const enteredVariablesList = objectKeys(variables)
  const variablesList = getHandlebarVariablesListFromText(text)
  const missingVariables = missingItemsOnSecondArray(
    variablesList,
    enteredVariablesList,
  )
  let finalText = text.slice()

  if (missingVariables.length > 0)
    throw new Error(
      `The following variables are missing: ${missingVariables.join(', ')}.`,
    )

  variablesList.forEach(
    variable =>
      (finalText = finalText.replace(
        `{{${variable}}}`,
        variables[variable] + '',
      )),
  )

  return finalText
}
