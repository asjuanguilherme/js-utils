export const getRandomChar = (characters: string): string => {
  const randomIndex: number = Math.floor(Math.random() * characters.length)
  return characters.charAt(randomIndex)
}
