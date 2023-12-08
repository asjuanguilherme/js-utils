import { regexPatterns } from 'regexPatterns'

export type GetAddressTextParams = {
  street: string
  number: string
  district: string
  city: string
  postcode?: string
  complement?: string
}

const requiredFields: (keyof GetAddressTextParams)[] = [
  'number',
  'street',
  'district',
  'city',
]

export const getAddressText = (params: GetAddressTextParams): string => {
  const missingFields = requiredFields.filter(field => !params[field])
  if (missingFields.length > 0) {
    throw new Error(
      `The following fields are required, but are missing:
      ${missingFields.join(', ')}`,
    )
  }

  if (
    params.postcode &&
    !regexPatterns.brazilianPostcode.test(params.postcode)
  ) {
    throw new Error('Invalid postcode format. Expected format is ddddd-ddd.')
  }

  const addressParts = [
    params.street,
    params.number,
    params.complement,
    params.district,
    params.city,
    params.postcode,
  ].filter(item => item)

  return addressParts.join(' - ')
}
