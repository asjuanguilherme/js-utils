export const reorderArray = <T>(
  array: T[],
  sourceIndex: number,
  targetIndex: number,
): T[] => {
  if (
    sourceIndex < 0 ||
    sourceIndex >= array.length ||
    targetIndex < 0 ||
    targetIndex >= array.length
  ) {
    throw new Error("Source or target indices are out of the array's range.")
  }

  const newArray = [...array]

  const [removedItem] = newArray.splice(sourceIndex, 1)

  newArray.splice(targetIndex, 0, removedItem)

  return newArray
}
