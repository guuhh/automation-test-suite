describe('Check static text labels', () => {
    beforeEach(() => {
        cy.visit('/')
        Cypress.on('uncaught:exception', () => {
            return false
          })
    })

    it('validate static text labels in english', () => {

        cy.get('button span.btn-section').invoke('text').then((languageChoosed) => {
            expect(languageChoosed).to.have.string('en-US')
        })

        cy.get('.portlet-body').then((body) => {
           
            cy.get(body)
            .get('.ddm-form-basic-info h1')
              .should('contain', 'This is a Liferay Forms')
            .get('.ddm-form-basic-info .ddm-form-description')
              .should('contain', 'This is a description field from our Liferay Forms')
            .get('.lfr-ddm-form-page-title')
            .should('contain', 'This is the first page of our forms.')
            .get('.text-secondary')
            .should('contain', 'Indicates Required Fields')
            .get('.ddm-field[data-field-name="WhatIsYourName"] .ddm-label')
            .should('contain', 'What is your name?')
            .get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .ddm-label')
            .should('contain', 'What is the date of your birth?')
            .get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .ddm-label')
            .should('contain', 'Why did you join the testing area?')
            .get('#ddm-form-submit')
            .should('contain', 'Submit')
        })
    })
    it('validate static text labels in portuguese', () => {

        cy.get('button span.btn-section').contains('en-US').click()
        cy.get('a .taglib-text-icon').contains('português-Brasil').click()
        cy.wait(1000)
        cy.get('button span.btn-section').should('contain', 'pt-BR')
        cy.wait(1000)

        cy.get('.portlet-body').then((body) => {
           
            cy.get(body)
            .get('.ddm-form-basic-info h1')
              .should('contain', 'Este é um Liferay Forms')
            .get('.ddm-form-basic-info .ddm-form-description')
              .should('contain', 'E aqui temos a descrição do nosso forms')
            .get('.lfr-ddm-form-page-title')
            .should('contain', 'Está é a primeira página de nosso forms.')
            .get('.ddm-field[data-field-name="WhatIsYourName"] .ddm-label')
            .should('contain', 'Qual é o seu nome?')
            .get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .ddm-label')
            .should('contain', 'Qual é a data do seu nascimento?')
            .get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .ddm-label')
            .should('contain', 'Porque você ingressou na área de testes?')
            .get('#ddm-form-submit')
            .should('contain', 'Submeter')
            .get('.text-secondary')
            .should('contain', 'Indica campos obrigatórios')
        }) 
    })
})