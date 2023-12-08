export const removeUndefinedPropsFromObject = (object: {
  [key: string]: any
}): { [key: string]: any } => {
  const modifiedObject: { [key: string]: any } = {}

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (typeof object[key] === 'object') {
        modifiedObject[key] = removeUndefinedPropsFromObject(object[key])

        if (Object.keys(modifiedObject[key]).length === 0) {
          delete modifiedObject[key]
        }
      } else if (typeof object[key] !== 'undefined') {
        modifiedObject[key] = object[key]
      }
    }
  }

  return modifiedObject
}
