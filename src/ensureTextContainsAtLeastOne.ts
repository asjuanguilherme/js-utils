import { getRandomChar } from 'getRandomChar'

export const ensureTextContainsAtLeastOne = (
  text: string,
  characterSet: string,
): string =>
  text.includes(characterSet) ? text : text + getRandomChar(characterSet)
