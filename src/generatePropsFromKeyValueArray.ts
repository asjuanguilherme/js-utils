export const generatePropsFromKeyValueArray = (
  data: {
    key: string
    value: string
  }[],
) => {
  const props: { [key: string]: unknown } = {}

  data.map(({ key, value }) => {
    props[key] = value
  })

  return props
}
