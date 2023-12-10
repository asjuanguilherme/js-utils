export const objectKeys = <Obj extends Record<string, unknown>>(obj: Obj) =>
  Object.keys(obj) as (keyof Obj)[]
