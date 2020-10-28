import { isValid, parseISO } from 'date-fns'

export const CustomOnlyNumbers: any = {
  errorMessage: 'O :attribute só aceita números.',
  validate: (val: string) => {
    return /^[0-9]*$/.test(val)
  }
}

export const CustomAfterOrEqual: any = {
  errorMessage: 'A :attribute deve conter uma data superior ou igual a :after_or_equal.',
  validate: (date: string, params: string) => {
    const isValidDate = (date: string) => isValid(parseISO(date))
    const [dateM, dateY] = date.split('/')
    const [paramsM, paramsY] = params.split('/')

    if (!isValidDate(`${dateY}-${dateM}`) || !isValidDate(`${paramsY}-${paramsM}`)) return false

    const inputDate = parseISO(`${dateY}-${dateM}`)
    const afterDate = parseISO(`${paramsY}-${paramsM}`)

    return inputDate.getTime() >= afterDate.getTime()
  }
}
