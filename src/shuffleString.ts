export const shuffleString = (text: string): string => {
  const splittedText = text.split('')
  for (let i = splittedText.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[splittedText[i], splittedText[j]] = [splittedText[j], splittedText[i]]
  }
  return splittedText.join('')
}
