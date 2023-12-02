export const getFirstAndLastNameFromFullName = (fullName?: string) => {
  if (!fullName) return null

  const splittedName = fullName.split(' ')

  if (splittedName.length > 1)
    return `${splittedName[0]} ${splittedName[splittedName.length - 1]}`

  return splittedName[0]
}
