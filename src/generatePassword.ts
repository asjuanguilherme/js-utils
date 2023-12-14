import { chars } from 'chars'
import { ensureTextContainsAtLeastOne } from 'ensureTextContainsAtLeastOne'
import { getRandomChar } from 'getRandomChar'
import { shuffleString } from 'shuffleString'

export const generatePassword = (size: number = 12): string => {
  let password = ''

  password = ensureTextContainsAtLeastOne(password, chars.special)
  password = ensureTextContainsAtLeastOne(password, chars.uppercaseLetters)
  password = ensureTextContainsAtLeastOne(password, chars.numbers)

  while (password.length < size) {
    password += getRandomChar(chars.all)
  }

  return shuffleString(password)
}
