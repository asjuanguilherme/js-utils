export const areArraysEquals = (
  firstArray: unknown[],
  secondArray: unknown[],
) => {
  if (firstArray.length !== secondArray.length) {
    return false
  }

  const sortedFirstArray = firstArray.slice().sort()
  const sortedSecondArray = secondArray.slice().sort()

  for (let i = 0; i < sortedFirstArray.length; i++) {
    if (sortedFirstArray[i] !== sortedSecondArray[i]) {
      return false
    }
  }

  return true
}
