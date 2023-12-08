export enum ERROR_MESSAGES_ENUM {
  BAD_REQUEST = 'Falha na requisição.',
  UNKNOWN_ERROR = 'Algo deu errado.',
  UNAUTHORIZED = 'Requisição não autorizada.',
  FORBIDDEN_ACCESS = 'Acesso proibido.',
  INVALID_CREDENTIALS = 'Credenciais inválidas',
  INVALID_USER = 'Usuário inválido',
  INCORRECT_PASSWORD = 'Senha incorreta',
  NOT_FOUND = 'Conteúdo solicitado não encontrado.',
  INTERNAL_SERVER_ERROR = 'Erro interno do servidor.',
  CMS_COMUNICATION_FAILED = 'Erro de comunicação com o CMS.',
  BAG_PRODUCT_IS_OUT_OF_STOCK = 'Alguns dos produtos no carrinho estão fora de estoque.',
  NETWORK_ERROR = 'Erro de comunicação de rede.',
  TIMEOUT_ERROR = 'Tempo limite de requisição atingido.',
  INVALID_INPUT = 'Entrada inválida.',
  DUPLICATE_ENTRY = 'Entrada duplicada.',
  OPERATION_NOT_PERMITTED = 'Operação não permitida.',
  RESOURCE_CONFLICT = 'Conflito de recurso.',
  SERVICE_UNAVAILABLE = 'Serviço temporariamente indisponível.',
  INVALID_FILE_FORMAT = 'Formato de arquivo inválido.',
}

export type ErrorCode = keyof typeof ERROR_MESSAGES_ENUM

export const getErrorMessage = (errorCode: ErrorCode): string => {
  return ERROR_MESSAGES_ENUM[errorCode]
}
