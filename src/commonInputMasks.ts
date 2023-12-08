export const commonInputMasks = {
  phoneNumber: {
    mask: '(__) _____-____',
    replacement: { _: /\d/ },
  },
  postcode: {
    mask: '_____-___',
    replacement: { _: /\d/ },
  },
  cpf: {
    mask: '___.___.___-__',
    replacement: { _: /\d/ },
  },
  date: {
    mask: '__/__/____',
    replacement: { _: /\d/ },
  },
  creditCard: {
    mask: '____-____-____-____',
    replacement: { _: /\d/ },
  },
  expirationDate: {
    mask: '__/____',
    replacement: { _: /\d/ },
  },
  creditCardCVV: {
    mask: '___',
    replacement: { _: /\d/ },
  },
  socialSecurityNumber: {
    mask: '___-__-____',
    replacement: { _: /\d/ },
  },
  zipCode: {
    mask: '_____-___',
    replacement: { _: /\d/ },
  },
  time: {
    mask: '__:__',
    replacement: { _: /\d/ },
  },
}
