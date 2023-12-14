export type ErrorMessages = {
  BAD_REQUEST: string
  UNKNOWN_ERROR: string
  UNAUTHORIZED: string
  FORBIDDEN_ACCESS: string
  INVALID_CREDENTIALS: string
  INVALID_USER: string
  INCORRECT_PASSWORD: string
  NOT_FOUND: string
  INTERNAL_SERVER_ERROR: string
  CMS_COMUNICATION_FAILED: string
  BAG_PRODUCT_IS_OUT_OF_STOCK: string
  NETWORK_ERROR: string
  TIMEOUT_ERROR: string
  INVALID_INPUT: string
  DUPLICATE_ENTRY: string
  OPERATION_NOT_PERMITTED: string
  RESOURCE_CONFLICT: string
  SERVICE_UNAVAILABLE: string
  INVALID_FILE_FORMAT: string
}

export type ErrorCode = keyof ErrorMessages

type Locale = 'en' | 'pt'

export const getErrorMessage = (
  errorCode: ErrorCode,
  locale: Locale = 'en',
): string => {
  const translations: Record<Locale, ErrorMessages> = {
    en: {
      BAD_REQUEST: 'Request failed.',
      UNKNOWN_ERROR: 'Something went wrong.',
      UNAUTHORIZED: 'Unauthorized request.',
      FORBIDDEN_ACCESS: 'Forbidden access.',
      INVALID_CREDENTIALS: 'Invalid credentials.',
      INVALID_USER: 'Invalid user.',
      INCORRECT_PASSWORD: 'Incorrect password.',
      NOT_FOUND: 'Requested content not found.',
      INTERNAL_SERVER_ERROR: 'Internal server error.',
      CMS_COMUNICATION_FAILED: 'CMS communication error.',
      BAG_PRODUCT_IS_OUT_OF_STOCK:
        'Some products in the cart are out of stock.',
      NETWORK_ERROR: 'Network communication error.',
      TIMEOUT_ERROR: 'Request timeout exceeded.',
      INVALID_INPUT: 'Invalid input.',
      DUPLICATE_ENTRY: 'Duplicate entry.',
      OPERATION_NOT_PERMITTED: 'Operation not permitted.',
      RESOURCE_CONFLICT: 'Resource conflict.',
      SERVICE_UNAVAILABLE: 'Service temporarily unavailable.',
      INVALID_FILE_FORMAT: 'Invalid file format.',
    },
    pt: {
      BAD_REQUEST: 'Falha na requisição.',
      UNKNOWN_ERROR: 'Algo deu errado.',
      UNAUTHORIZED: 'Requisição não autorizada.',
      FORBIDDEN_ACCESS: 'Acesso proibido.',
      INVALID_CREDENTIALS: 'Credenciais inválidas.',
      INVALID_USER: 'Usuário inválido.',
      INCORRECT_PASSWORD: 'Senha incorreta.',
      NOT_FOUND: 'Conteúdo solicitado não encontrado.',
      INTERNAL_SERVER_ERROR: 'Erro interno do servidor.',
      CMS_COMUNICATION_FAILED: 'Erro de comunicação com o CMS.',
      BAG_PRODUCT_IS_OUT_OF_STOCK:
        'Alguns dos produtos no carrinho estão fora de estoque.',
      NETWORK_ERROR: 'Erro de comunicação de rede.',
      TIMEOUT_ERROR: 'Tempo limite de requisição atingido.',
      INVALID_INPUT: 'Entrada inválida.',
      DUPLICATE_ENTRY: 'Entrada duplicada.',
      OPERATION_NOT_PERMITTED: 'Operação não permitida.',
      RESOURCE_CONFLICT: 'Conflito de recurso.',
      SERVICE_UNAVAILABLE: 'Serviço temporariamente indisponível.',
      INVALID_FILE_FORMAT: 'Formato de arquivo inválido.',
    },
  }

  return translations[locale][errorCode]
}
