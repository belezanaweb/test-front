import { brl } from './currency'

describe('currency functions', () => {
  describe('brl', () => {
    test('Should format as R$', async () => {
      expect(brl()).toEqual('R$ 0,00')
      expect(brl(0)).toEqual('R$ 0,00')
      expect(brl(30)).toEqual('R$ 30,00')
      expect(brl(30.3)).toEqual('R$ 30,30')
      expect(brl(30.33)).toEqual('R$ 30,33')
      expect(brl(30.333)).toEqual('R$ 30,33')
    })
  })
})
