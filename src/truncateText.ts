export const truncateText = (text: string, limit: number) => {
  if (limit === 0 || text.length < limit) return text

  return text.substring(0, limit) + '...'
}
