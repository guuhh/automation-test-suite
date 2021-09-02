describe('Submit forms fillfuled with valid datas', () =>{
    beforeEach(() => {
        cy.visit('/')
        Cypress.on('uncaught:exception', () => {
            return false
          })
    })

    it('submit english form', () =>{
        cy.get('button span.btn-section').invoke('text').then((languageChoosed) => {
            expect(languageChoosed).to.have.string('en-US')
        })
        
        cy.get('.ddm-page-container-layout').within(() => {
            cy.get('.ddm-field[data-field-name="WhatIsYourName"]').type('Maria Joana Doe')
            .focused().should('have.class','form-control')
            //cy.get('.date-picker button').click()
            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"]').clear().type('11101988')
            .focused().should('have.class','form-control')
            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"]').type('Tests are awesome!')
            .focused().should('have.class','form-control')    
        })
        cy.get('#ddm-form-submit').click()
        cy.get('.ddm-form-success-page')
        .as('SuccessMessages')
      
        cy.verifySuccessfulMessage()
        cy.get('@SuccessMessages').should('contain', 'Information sent')
        cy.get('@SuccessMessages').should('contain', 'Information sent successfully!')     
    })
    it('submit portuguese form', () => {
        cy.get('button span.btn-section').contains('en-US').click()
        cy.get('a .taglib-text-icon').contains('português-Brasil').click()
        cy.wait(1000)
        cy.get('button span.btn-section').should('contain', 'pt-BR')
        
        cy.get('.ddm-page-container-layout').within(() => {
            cy.get('.ddm-field[data-field-name="WhatIsYourName"]').type('Maria Joana Doe')
            .focused().should('have.class','form-control')
            //cy.get('.date-picker button').click()
            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"]').clear().type('11101988')
            .focused().should('have.class','form-control')
            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"]').clear().type('Tests are awesome!')
            .focused().should('have.class','form-control')    
        })

        cy.get('#ddm-form-submit').click()
        cy.get('.ddm-form-success-page')
        .as('SuccessMessages')
    
        cy.verifySuccessfulMessage()
        cy.get('@SuccessMessages').should('contain', 'Information sent')
        cy.get('@SuccessMessages').should('contain', 'Information sent successfully!')     
    })
})