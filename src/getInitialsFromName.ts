export const getInitialsFromName = (name: string) => {
  const names = name.split(' ').slice(0, 2)
  const initials = names.map(n => n[0])
  return initials.join('').toUpperCase()
}
