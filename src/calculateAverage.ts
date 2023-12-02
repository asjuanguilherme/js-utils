export const calculateAverage = (list: number[]): number => {
  const sum = list.reduce((acc, curr) => acc + curr, 0)
  const average = sum / list.length

  return average
}
