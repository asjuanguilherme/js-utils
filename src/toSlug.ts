export function toSlug(str: string): string {
  let s = str
  if (!s) {
    return ''
  }
  s = s.toLowerCase().trim()
  s = s.replace(/ & /g, ' and ')
  s = s.replace(/[ ]+/g, '-')
  s = s.replace(/[-]+/g, '-')
  s = s.replace(/[^a-z0-9-]+/g, '')
  return s
}
