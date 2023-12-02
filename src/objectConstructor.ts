export const objectKeys = <Obj extends Object>(obj: Obj) =>
  Object.keys(obj) as (keyof Obj)[]
