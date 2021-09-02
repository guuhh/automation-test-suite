describe('Check invalid data on fields of form', () => {
    beforeEach(() => {
        cy.visit('/')
        Cypress.on('uncaught:exception', () => {
            return false
          })
    })

    it('reject an invalid name on english form', () => {

        cy.get('.ddm-form-builder-app').within(() => {
            cy.get('.ddm-field[data-field-name="WhatIsYourName"] input.form-control')
              .type('99999999999999999999999999999999999999999999999999')
               .should('have.value','99999999999999999999999999999999999999999999999999')
                 .should('have.class', 'has-error')  
        }) 
    })

    it('reject an invalid birthday data on english form', () => {

        cy.get('.ddm-form-builder-app').within(() => {
            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] input.form-control')
              .clear().type('99/99/9999')
               .should('have.value','99/99/9999')
                 .should('have.class', 'has-error')  
        }) 
    })

    it('reject an invalid name on portuguese form', () => {

        cy.get('button span.btn-section').contains('en-US').click()
        cy.get('a .taglib-text-icon').contains('português-Brasil').click()
        cy.wait(1000)
        cy.get('button span.btn-section').should('contain', 'pt-BR')

        cy.get('.ddm-form-builder-app').within(() => {
            cy.get('.ddm-field[data-field-name="WhatIsYourName"] input.form-control')
              .type('99999999999999999999999999999999999999999999999999')
               .should('have.value','99999999999999999999999999999999999999999999999999')
                 .should('have.class', 'has-error')  
        }) 
    })

    it('reject an invalid birthday data on portuguese form', () => {
        cy.get('button span.btn-section').contains('en-US').click()
        cy.get('a .taglib-text-icon').contains('português-Brasil').click()
        cy.wait(1000)
        cy.get('button span.btn-section').should('contain', 'pt-BR')
        
        cy.get('.ddm-form-builder-app').within(() => {
            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] input.form-control')
              .clear().type('99/99/9999')
               .should('have.value','99/99/9999')
                 .should('have.class', 'has-error')  
        }) 
    })
})