export const missingItemsOnSecondArray = (
  mainArray: any[],
  comparisonArray: any[],
): any[] => {
  if (!Array.isArray(mainArray) || !Array.isArray(comparisonArray)) {
    throw new Error('Both arguments must be arrays.')
  }

  const missingItems: any[] = []

  mainArray.forEach(item => {
    if (!comparisonArray.includes(item)) {
      missingItems.push(item)
    }
  })

  return missingItems
}
