export const isValueAssociatedWithKeyInQueryString = (
  key: string,
  value: string | number,
  url: string,
): boolean => {
  const urlSearchParams = new URLSearchParams(url)

  if (urlSearchParams.has(key)) {
    const queryValue = urlSearchParams.get(key)
    const targetValue = String(value)
    return queryValue === targetValue
  }

  return false
}
