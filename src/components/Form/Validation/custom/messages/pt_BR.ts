const defaultMessage = 'O campo :attribute deve'

export default {
  accepted: `${defaultMessage} ser aceito.`,
  active_url: `${defaultMessage} conter uma URL válida.`,
  after: `${defaultMessage} conter uma data posterior a :after.`,
  after_or_equal: `${defaultMessage} conter uma data superior ou igual a :after_or_equal.`,
  alpha: `${defaultMessage} conter apenas letras.`,
  alpha_dash: `${defaultMessage} conter apenas letras, números e traços.`,
  alpha_num: `${defaultMessage} conter apenas letras e números .`,
  array: `${defaultMessage} conter um array.`,
  before: `${defaultMessage} conter uma data anterior a :date.`,
  before_or_equal: `${defaultMessage} conter uma data inferior ou igual a :date.`,
  between: {
    numeric: `${defaultMessage} conter um número entre :min e :max.`,
    file: `${defaultMessage} conter um arquivo de :min a :max kilobytes.`,
    string: `${defaultMessage} conter entre :min a :max caracteres.`,
    array: `${defaultMessage} conter de :min a :max itens`
  },
  boolean: `${defaultMessage} conter o valor verdadeiro ou falso.`,
  confirmed: 'A confirmação para o campo :attribute não coincide.',
  date: 'O campo :attribute não contém uma data válida.',
  date_format: 'A data informada para o campo :attribute não respeita o formato :format.',
  different: 'Os campos :attribute e :other devem conter valores diferentes.',
  digits: `${defaultMessage} conter :digits dígitos.`,
  digits_between: `${defaultMessage} conter entre :min a :max dígitos.`,
  dimensions: 'O valor informado para o campo :attribute não é uma dimensão de imagem válida.',
  distinct: 'O campo :attribute contém um valor duplicado.',
  email: 'O campo :attribute não contém um endereço de email válido.',
  exists: 'O valor selecionado para o campo :attribute é inválido.',
  file: `${defaultMessage} conter um arquivo.`,
  filled: 'O campo :attribute é obrigatório.',
  gt: {
    numeric: `${defaultMessage} ser maior que :value.`,
    file: 'O arquivo do campo :attribute deve ser maior que :value kilobytes.',
    string: `${defaultMessage} ser maior que :value caracteres.`,
    array: `${defaultMessage} ter mais que :value itens`
  },
  gte: {
    numeric: `${defaultMessage} ser maior ou igual a :value.`,
    file: 'O arquivo do campo :attribute deve ser maior ou igual a :value kilobytes.',
    string: `${defaultMessage} ser maior ou igual a :value caracteres.`,
    array: `${defaultMessage} ter :value itens ou mais`
  },
  image: `${defaultMessage} conter uma imagem.`,
  in: 'O campo :attribute não contém um valor válido.',
  in_array: 'O campo :attribute não existe em :other.',
  integer: `${defaultMessage} conter um número inteiro.`,
  ip: `${defaultMessage} conter um IP válido.`,
  ipv4: `${defaultMessage} conter um IPv4 válido.`,
  ipv6: `${defaultMessage} conter um IPv6 válido.`,
  json: `${defaultMessage} conter uma string JSON válida.`,
  lt: {
    numeric: `${defaultMessage} ser menor que :value.`,
    file: 'O arquivo do campo :attribute ser menor que :value kilobytes.',
    string: `${defaultMessage} ser menor que :value caracteres.`,
    array: `${defaultMessage} ter menos que :value itens`
  },
  lte: {
    numeric: `${defaultMessage} ser menor ou igual a :value.`,
    file: 'O arquivo do campo :attribute ser menor ou igual a :value kilobytes.',
    string: `${defaultMessage} ser menor ou igual a :value caracteres.`,
    array: 'O campo :attribute não deve ter mais que :value itens.'
  },
  max: {
    numeric: 'O campo :attribute não pode conter um valor superior a :max.',
    file: 'O campo :attribute não pode conter um arquivo com mais de :max kilobytes.',
    string: 'O campo :attribute não pode conter mais de :max caracteres.',
    array: `${defaultMessage} conter no máximo :max itens`
  },
  mimes: `${defaultMessage} conter um arquivo do tipo: :values.`,
  mimetypes: `${defaultMessage} conter um arquivo do tipo: :values.`,
  min: {
    numeric: `${defaultMessage} conter um número superior ou igual a :min.`,
    file: `${defaultMessage} conter um arquivo com no mínimo :min kilobytes.`,
    string: `${defaultMessage} conter no mínimo :min caracteres.`,
    array: `${defaultMessage} conter no mínimo :min itens`
  },
  not_in: 'O campo :attribute contém um valor inválido.',
  not_regex: 'O formato do valor campo :attribute é inválido.',
  numeric: `${defaultMessage} conter um valor numérico.`,
  present: `${defaultMessage} estar presente.`,
  regex: 'O formato do valor informado no campo :attribute é inválido.',
  required: 'O campo :attribute é obrigatório.',
  required_if: 'O campo :attribute é obrigatório quando o valor do :other é igual a :value.',
  required_unless:
    'O campo :attribute é obrigatório a menos que :other esteja presente em :values.',
  required_with: 'O campo :attribute é obrigatório quando :values está presente.',
  required_with_all: 'O campo :attribute é obrigatório quando um dos :values está presente.',
  required_without: 'O campo :attribute é obrigatório quando :values não está presente.',
  required_without_all: 'O campo :attribute é obrigatório quando nenhum dos :values está presente.',
  same: 'Os campos :attribute e :other devem conter valores iguais.',
  size: {
    numeric: `${defaultMessage} conter o número :size.`,
    file: `${defaultMessage} conter um arquivo com o tamanho de :size kilobytes.`,
    string: `${defaultMessage} conter :size caracteres.`,
    array: `${defaultMessage} conter :size itens`
  },
  string: `${defaultMessage} ser uma string.`,
  timezone: `${defaultMessage} conter um fuso horário válido.`,
  unique: 'O valor informado para o campo :attribute já está em uso.',
  uploaded: 'Falha no Upload do arquivo no campo :attribute.',
  url: 'O formato da URL informada para o campo :attribute é inválido.',
  attributes: {}
}
