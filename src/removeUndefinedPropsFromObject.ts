/* eslint-disable no-prototype-builtins */

type RecursiveObject<T> = { [key: string]: T | RecursiveObject<T> }

export const removeUndefinedPropsFromObject = <T>(
  object: RecursiveObject<T>,
): RecursiveObject<T> => {
  const modifiedObject: RecursiveObject<T> = {}

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key]

      if (typeof value === 'object') {
        const modifiedValue = removeUndefinedPropsFromObject(
          value as RecursiveObject<T>,
        )

        if (Object.keys(modifiedValue).length > 0) {
          modifiedObject[key] = modifiedValue
        }
      } else if (typeof value !== 'undefined') {
        modifiedObject[key] = value
      }
    }
  }

  return modifiedObject
}
