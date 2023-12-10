/* eslint-disable no-useless-escape */
export const regexPatterns = {
  colorHexadecimal: /^#(?:[0-9A-Fa-f]{3}){1,2}(?:[0-9A-Fa-f]{2})?$/i,
  onlyNumbers: /^[0-9]+$/,
  onlyLettersWithSpace: /^[a-zA-ZÀ-ÿ\s-]*$/,
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/,
  handlebarVariable: /{{\s*(.*?)\s*}}/g,
  passwordWithSpecialCharactersLowerAndUpperLetter:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  brazilianPostcode: /^\d{5}-\d{3}$/,
  brazilianCPF: /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{11})$/,
  brazilianPhone: /^\(\d{2}\) \d{5}-\d{4}$/,
}
