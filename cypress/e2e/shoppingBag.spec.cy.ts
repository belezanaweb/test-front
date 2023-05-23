describe('Testar aplicação toda', () => {
  it('Regressivo geral', () => {
    
    //logar
    cy.visit('http://localhost:3000')
    
    //Verificar Step Sacola
    cy.contains('Sacola')
    cy.contains('Good Girl Carolina Herrera Eau ')
    cy.contains('Seguir para o pagamento').click()

    //Verfivar Step de Pagamento
    cy.contains('Cartâo de Crédito')

    //Validar mensagens de erros nos campos
    cy.contains('Finalizar pedido').click()
    cy.contains('insira um número de cartão válido')
    cy.contains('insira um nome válido')
    cy.contains('insira uma data válida')
    cy.contains('insira um cvv válido')

    //Validar Mensagens cartão de crẽdito
    cy.get('input[placeholder=\"0000 0000 0000 0000\"]').type('123412341234123')
    cy.contains('O número do cartão tem 16 caractes.')
    cy.get('input[placeholder=\"0000 0000 0000 0000\"]').clear()
    cy.get('input[placeholder=\"0000 0000 0000 0000\"]').type('abcdabcdabcdabcd')
    cy.contains('Campo deve conter apenas números')
    cy.get('input[placeholder=\"0000 0000 0000 0000\"]').clear()
    cy.get('input[placeholder=\"0000 0000 0000 0000\"]').type('1234123412341234')

    cy.get('input[placeholder=\"Nome impresso no cartão"]').type('Usuáro Teste')
    
    //Validar Mensagens data de validade
    cy.get('input[placeholder=\"MM/AAAA"]').type('12345678')
    cy.contains('A data deve ter 7 caracteres.')
    cy.get('input[placeholder=\"MM/AAAA"]').clear()
    cy.get('input[placeholder=\"MM/AAAA"]').type('11/2029')

    //Validar Mensagens código CVV
    cy.get('input[placeholder=\"000"]').type('1234')
    cy.contains('O código CVV é um número de 3 caracteres.')
    cy.get('input[placeholder=\"000"]').clear()
    cy.get('input[placeholder=\"000"]').type('abc')
    cy.contains('Campo deve conter apenas números')
    cy.get('input[placeholder=\"000"]').clear()
    cy.get('input[placeholder=\"000"]').type('123')

    cy.contains('Finalizar pedido').click()

    //Verificat step Confirmação
    cy.contains('Compra efetuada com sucesso')
    cy.contains('**** **** **** 1234')
    cy.contains('Usuáro Teste')
    cy.contains('11/2029')

    cy.contains('Produtos')

    cy.contains('Voltar ao inicio do protótipo').click()
    
    //verificar volta para o step Sacola
    cy.contains('Seguir para o pagamento')
  })
})