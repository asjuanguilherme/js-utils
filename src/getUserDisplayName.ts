export const getUserDisplayName = (fullName: string): string => {
  const names: string[] = fullName.split(' ')

  if (names.length > 1) {
    const initials: string = names
      .slice(0, -1)
      .map(name => name.charAt(0))
      .join(' ')
    return `${initials} ${names[names.length - 1]}`
  } else {
    return fullName
  }
}
