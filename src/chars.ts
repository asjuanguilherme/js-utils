const specialChars = '!@#$%^&*()_+{}[]:;<>,.?~-'
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowecaseLetters = uppercaseLetters.toLowerCase()
const numbers = '0123456789'

export const chars = {
  all: specialChars + uppercaseLetters + lowecaseLetters + numbers,
  numbers,
  special: specialChars,
  lowecaseLetters,
  uppercaseLetters,
}
