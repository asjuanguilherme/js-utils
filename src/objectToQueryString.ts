export const objectToQuerystring = (obj: Record<string, unknown>): string => {
  const queryParams = []

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      if (value !== undefined) {
        queryParams.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`,
        )
      }
    }
  }

  return queryParams.join('&')
}
