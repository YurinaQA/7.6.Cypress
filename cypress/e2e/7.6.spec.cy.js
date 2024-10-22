describe('template spec', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('api_server'))
    });
  
  
    it('login test', () => {
      cy.login('bropet@mail.ru', '123')
      cy.contains('Добро пожаловать bropet@mail.ru').should('be.visible', true)
    })
  
    it('Empty password test', () => {
      cy.login('bropet@mail.ru', null)
      cy.get('#pass').then((elements) => {
        expect(elements[0].checkValidity()).to.be.false
      })
    })
  
    it('Empty email test', () => {
      cy.login(null, '123')
      cy.get('#mail').then((elements) => {
        expect(elements[0].checkValidity()).to.be.false
      })
    })
  })
  
  describe('new spec', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('api_server'))
    });
    
  
    it('add book', () => {
      cy.login('bropet@mail.ru', '123')
      cy.add_book('Гарри Поттер и Узник Азкабана', 'Некоторое описание книги')
      cy.contains('.card-title','Гарри Поттер и Узник Азкабана').should('be.visible', true)
    })
  
    it('add book to favorite', () => {
      cy.login('bropet@mail.ru', '123')
      cy.add_book('Гарри Поттер и Узник Азкабана', 'Некоторое описание книги')
      cy.get('.card-footer > .btn').eq(-1).click()
      cy.get('.card-footer > .btn').eq(-1).contains('Delete from favorite').should('be.visible', true)
               
    })
  
    it('delete book from favorite', () => {
      cy.login('bropet@mail.ru', '123')
      cy.get("h4").click();
      cy.get('.card-footer > .btn').eq(-1).contains('Delete from favorite').click()     
    })
    
  })
  
  
  