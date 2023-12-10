export const missingItemsOnSecondArray = <T>(
  mainArray: T[],
  comparisonArray: T[],
): T[] => {
  if (!Array.isArray(mainArray) || !Array.isArray(comparisonArray)) {
    throw new Error('Both arguments must be arrays.')
  }

  const missingItems: T[] = []

  mainArray.forEach(item => {
    if (!comparisonArray.includes(item)) {
      missingItems.push(item)
    }
  })

  return missingItems
}
