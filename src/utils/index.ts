export function convertToCurrencyNumber(num: any = 0): any {
  const numValue = typeof num === 'string' ? parseFloat(num) : num;
  return numValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formToJSON(elements: Array<HTMLInputElement>) {
  return [].reduce.call(elements, (data: any, element: any) => {
    data[element.name] = element.value;

    return data;
  }, {});
}
