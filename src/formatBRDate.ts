type FormatDateOptions = {
  dateStyle?: 'full' | 'long' | 'medium' | 'short'
  timeStyle?: 'full' | 'long' | 'medium' | 'short'
  timeZone?: string
}

export const formatDate = (
  date: Date | string,
  options?: FormatDateOptions,
) => {
  const defaultOptions: FormatDateOptions = {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }

  const mergedOptions = { ...defaultOptions, ...options }

  return new Intl.DateTimeFormat('pt-BR', mergedOptions).format(new Date(date))
}
