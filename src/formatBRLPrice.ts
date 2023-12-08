export type FormatBRLPriceOptions = {
  minimumFractionDigits?: number
}

export const formatBRLPrice = (
  value: number | string,
  options?: FormatBRLPriceOptions,
): string => {
  const minimumFractionDigits = options?.minimumFractionDigits ?? 2

  if (typeof value !== 'number' && typeof value !== 'string') {
    throw new TypeError('Input must be a number or stringified number.')
  }

  const convertedValue = typeof value === 'string' ? Number(value) : value

  if (isNaN(convertedValue)) {
    throw new TypeError('Input must be a valid number or stringified number.')
  }

  const formattedPrice = convertedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits,
  })

  return formattedPrice
}
