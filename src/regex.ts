export const COLOR_HEXADECIMAL =
  /^#(?:[0-9A-Fa-f]{3}){1,2}(?:[0-9A-Fa-f]{2})?$/i

export const HANDLEBAR_VARIABLE_REGEX = /{{\s*(.*?)\s*}}/g

export const NAME_REGEX = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/

export const ONLY_LETTERS_WITH_SPACE_REGEX = /^[a-zA-ZÀ-ÿ\-\s]*$/

export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
