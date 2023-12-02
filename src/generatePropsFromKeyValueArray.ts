export const generatePropsFromKeyValueArray = (
  data: {
    key: string
    value: string
  }[],
) => {
  const props: { [key: string]: any } = {}

  data.map(({ key, value }) => {
    props[key] = value
  })

  return props
}
