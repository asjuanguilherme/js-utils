export type CreateNumbersArrayParams = {
  size: number
  startNumber?: number
}

export const createNumbersArray = ({
  size,
  startNumber = 1,
}: CreateNumbersArrayParams) => {
  const numbers: number[] = []
  for (let i = 0; i < size; i++) {
    numbers.push(startNumber + i)
  }

  return numbers
}
