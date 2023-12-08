export const getKeyValueArrayItemValue = (
  array: { key: string; value: string }[],
  key: string,
) => {
  try {
    return array.filter(item => item.key === key)[0].value
  } catch (err) {
    console.log('The value for requested key is empty')
    return ''
  }
}
