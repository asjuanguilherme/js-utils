export const removeQueryStringFromURL = (url: string): string => {
  if (typeof url !== 'string') {
    throw new Error('A URL deve ser uma string')
  }

  const parsedUrl = new URL(url)

  parsedUrl.search = ''
  parsedUrl.hash = ''

  return parsedUrl.toString()
}
