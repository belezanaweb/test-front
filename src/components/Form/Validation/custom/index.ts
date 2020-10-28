import Validator from 'validatorjs'

import ptBR from './messages/pt_BR'

import { CustomOnlyNumbers, CustomAfterOrEqual } from './rules'

// eslint-disable-next-line react-hooks/rules-of-hooks
Validator.useLang('pt_BR')
Validator.setMessages('pt_BR', ptBR)

Validator.register('only_numbers', CustomOnlyNumbers.validate, CustomOnlyNumbers.errorMessage)

Validator.register('after_or_equal', CustomAfterOrEqual.validate, CustomAfterOrEqual.errorMessage)

export default Validator
