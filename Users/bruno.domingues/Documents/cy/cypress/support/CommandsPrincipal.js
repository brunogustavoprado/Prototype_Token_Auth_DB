Cypress.Commands.add('login', () => {
    cy.log('Conectando ao sistema Homologação')
    cy.visit('https://homologacao.promobank.com.br/')
    cy.log('Aceitando os Cookies')
    cy.get('[id="aceitarCookies"]').click()
    cy.log('Inserindo a Empresa')
    cy.get('[id="inputEmpresa"]').type('1111')
    cy.log('Inserindo o Usuario')
    cy.get('[id="inputUsuario"]').type('bruno.sup07')
    cy.log('Inserindo a Senha')
    cy.get('[id="passField"]').type('Promo@123')
    cy.log('Entrando no sistema ao apertar em entrar')
    cy.contains('button', 'Entrar').click()
    cy.log('Esperando para evitar poblemas com captha')
    cy.wait(2000)
})