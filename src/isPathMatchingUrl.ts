export type IsPathMatchingUrlOptions = {
  includeParents?: boolean
  considerQueryString?: boolean
}

export const isPathMatchingUrl = (
  path: string,
  asPath: string,
  options: IsPathMatchingUrlOptions = {},
): boolean => {
  const { includeParents = false, considerQueryString = false } = options

  const fullPath = considerQueryString ? asPath : asPath.split('?')[0]
  const isRootPath = path === '/'
  const pathMatchesAsPath = includeParents
    ? fullPath.includes(path)
    : fullPath.endsWith(`/${path}`)

  return isRootPath ? path === fullPath : pathMatchesAsPath
}
