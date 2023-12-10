export const mergeObjects = <T>(obj1: T, obj2?: Partial<T>): T => {
  if (!obj2) return { ...obj1 }

  const merged: T = { ...obj1 }

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (
        typeof obj2[key] === 'object' &&
        obj2[key] !== null &&
        !Array.isArray(obj2[key]) &&
        typeof merged[key] === 'object' &&
        merged[key] !== null &&
        !Array.isArray(merged[key])
      ) {
        merged[key] = mergeObjects(merged[key], obj2[key])
      } else {
        const value = obj2[key] as T[Extract<keyof T, string>]
        merged[key] = value
      }
    }
  }

  return merged
}
