export const isNumberOrStringifiedNumber = (entry: number | string) =>
  Number.isNaN(Number(entry))
