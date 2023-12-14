export const getFieldValidationMessage = (fieldName: string) => {
  const messages = {
    invalidChars: 'Caracteres inválidos.',
    required: `O campo ${fieldName} é obrigatório.`,
    invalid: `${fieldName} é inválido.`,
    tooShort: (limit: number) =>
      `${fieldName} é muito curto. Deve ter pelo menos ${limit} caracteres.`,
    tooLong: (limit: number) =>
      `${fieldName} é muito longo. Deve ter no máximo ${limit} caracteres.`,
    dataType: (expectedType: string) =>
      `${fieldName} deve ser do tipo ${expectedType}.`,
    regex: `Formato inválido para ${fieldName}.`,
    email: `O formato do e-mail é inválido para ${fieldName}.`,
    url: `A URL fornecida para ${fieldName} não é válida.`,
    isEqual: (otherFieldName: string) =>
      `${fieldName} deve ser igual a ${otherFieldName}.`,
    genericError: `Erro de validação para ${fieldName}.`,
    numberRange: (minValue: number, maxValue: number) =>
      `${fieldName} deve estar entre ${minValue} e ${maxValue}.`,
    arrayMinLength: (minLength: number) =>
      `A lista ${fieldName} deve ter pelo menos ${minLength} elementos.`,
    arrayMaxLength: (maxLength: number) =>
      `A lista ${fieldName} deve ter no máximo ${maxLength} elementos.`,
    specialChars: `${fieldName} deve conter caracteres especiais.`,
    passwordPattern: `${fieldName} deve conter pelo menos uma letra maiúscula, um caractere especial e um número.`,
    success: `${fieldName} válido!`,
    dateInvalid: `${fieldName} possui uma data inválida.`,
    timeInvalid: `${fieldName} possui um horário inválido.`,
    optionalFieldEmpty: `${fieldName} é um campo opcional, mas se preenchido, deve atender aos critérios de validação.`,
    uniqueField: `${fieldName} deve ser único na lista.`,
    min: (minValue: number) => `${fieldName} deve ser no mínimo ${minValue}.`,
    max: (maxValue: number) => `${fieldName} deve ser no máximo ${maxValue}.`,
  }

  return messages
}
