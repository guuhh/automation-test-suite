describe('Submit forms with just only one data', () => {
    beforeEach(() => {
        cy.visit('/')
        Cypress.on('uncaught:exception', () => {
            return false
          })
    })

    it('submit english form with just only name data', () => {

        cy.get('button span.btn-section').invoke('text').then((languageChoosed) => {
            expect(languageChoosed).to.have.string('en-US')
        })

        cy.get('.ddm-form-builder-app').within(() => {

            cy.get('.ddm-field[data-field-name="WhatIsYourName"] input.form-control')
              .type('Maria Joana Doe')
               .should('have.value','Maria Joana Doe').should('not.have.class', 'has-error')
        
            cy.get('#ddm-form-submit').click()

            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group')
               .should('have.class', 'has-error')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group')
               .should('have.class', 'has-error')


            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group span.form-feedback-group .form-feedback-item')
               .should('contain', 'This field is required.')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group span.form-feedback-group div.form-feedback-item')
               .should('contain', 'This field is required.')
        }) 
        
    })
    it('submit portuguese form with just only name data', () => {

        cy.get('button span.btn-section').contains('en-US').click()
        cy.get('a .taglib-text-icon').contains('português-Brasil').click()
        cy.wait(1000)
        cy.get('button span.btn-section').should('contain', 'pt-BR')
        cy.wait(1000)

        cy.get('.ddm-form-builder-app').within(() => {

            cy.get('.ddm-field[data-field-name="WhatIsYourName"] input.form-control')
              .type('Maria Joana Doe')
               .should('have.value','Maria Joana Doe').should('not.have.class', 'has-error')
        
            cy.get('#ddm-form-submit').click()

            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group')
               .should('have.class', 'has-error')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group')
               .should('have.class', 'has-error')


            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group span.form-feedback-group .form-feedback-item')
               .should('contain', 'Este campo é obrigatório.')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group span.form-feedback-group div.form-feedback-item')
               .should('contain', 'Este campo é obrigatório.')
        }) 
        
    })
    it('submit english form with just only birthday date data', () => {

        cy.get('button span.btn-section').invoke('text').then((languageChoosed) => {
            expect(languageChoosed).to.have.string('en-US')
        })

        cy.get('.ddm-form-builder-app').within(() => {

            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] input.form-control')
               .clear().type('11101988')
                 .should('have.attr','value','11/10/1988').should('not.have.class', 'has-error')

        
            cy.get('#ddm-form-submit').click()

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group')
               .should('have.class', 'has-error')
        
            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group')
               .should('have.class', 'has-error')

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group span.form-feedback-group .form-feedback-item')
            .should('contain', 'This field is required.')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group span.form-feedback-group div.form-feedback-item')
            .should('contain', 'This field is required.')
        }) 
    })
    it('submit portuguese form with just only birthday date data', () => {

        cy.get('button span.btn-section').contains('en-US').click()
        cy.get('a .taglib-text-icon').contains('português-Brasil').click()
        cy.wait(1000)
        cy.get('button span.btn-section').should('contain', 'pt-BR')
        cy.wait(1000)

        cy.get('.ddm-form-builder-app').within(() => {

            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] input.form-control', {timeout:1000})
               .clear().type('11101988')
                 .should('have.attr','value','11/10/1988').should('not.have.class', 'has-error')

        
            cy.get('#ddm-form-submit').click()

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group')
               .should('have.class', 'has-error')
        
            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group')
               .should('have.class', 'has-error')

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group span.form-feedback-group .form-feedback-item')
            .should('contain', 'Este campo é obrigatório.')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group span.form-feedback-group div.form-feedback-item')
            .should('contain', 'Este campo é obrigatório.')
        }) 
    })
    it('submit english form with just only commentary data', () => {


        cy.get('button span.btn-section').invoke('text').then((languageChoosed) => {
            expect(languageChoosed).to.have.string('en-US')
        })

        cy.get('.ddm-form-builder-app').within(() => {

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] textarea.form-control')
                 .type('Tests are awesome!')
                 .should('have.value','Tests are awesome!').should('not.have.class', 'has-error')

        
            cy.get('#ddm-form-submit').click()

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group')
               .should('have.class', 'has-error')
        
            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group')
               .should('have.class', 'has-error')

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group span.form-feedback-group .form-feedback-item')
            .should('contain', 'This field is required.')

            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group span.form-feedback-group div.form-feedback-item')
            .should('contain', 'This field is required.')
        })
    })
    it('submit portuguese form with just only commentary data', () => {

        cy.get('button span.btn-section').contains('en-US').click()
        cy.get('a .taglib-text-icon').contains('português-Brasil').click()
        cy.wait(1000)
        cy.get('button span.btn-section').should('contain', 'pt-BR')
        cy.wait(1000)

        cy.get('.ddm-form-builder-app').within(() => {

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] textarea.form-control',  {timeout:1000})
                 .type('Tests are awesome!')
                 .should('have.value','Tests are awesome!').should('not.have.class', 'has-error')

        
            cy.get('#ddm-form-submit').click()

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group')
               .should('have.class', 'has-error')
        
            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group')
               .should('have.class', 'has-error')

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group span.form-feedback-group .form-feedback-item')
            .should('contain', 'Este campo é obrigatório.')

            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group span.form-feedback-group div.form-feedback-item')
            .should('contain', 'Este campo é obrigatório.')
        })
    })
    it('submit english form with all empty fields', () => {

        cy.wait(5000)
        cy.get('button span.btn-section').invoke('text').then((languageChoosed) => {
            expect(languageChoosed).to.have.string('en-US')
        })
        
        cy.get('#ddm-form-submit', {timeout:1000}).click({force:true})
        cy.wait(1000)

        cy.get('.ddm-form-builder-app').within(() => {

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group')
               .should('have.class', 'has-error')
        
            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group')
               .should('have.class', 'has-error')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group')
                .should('have.class', 'has-error')

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group span.form-feedback-group .form-feedback-item')
            .should('contain', 'This field is required.')

            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group span.form-feedback-group div.form-feedback-item')
            .should('contain', 'This field is required.')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group span.form-feedback-group div.form-feedback-item')
            .should('contain', 'This field is required.')
        })
        
    })
    it('submit portuguese form with all empty fields', () => {

        cy.get('button span.btn-section').contains('en-US').click()
        cy.get('a .taglib-text-icon').contains('português-Brasil').click()
        cy.wait(1000)
        cy.get('button span.btn-section').should('contain', 'pt-BR')
        
        cy.get('#ddm-form-submit', {timeout:1000}).click({force:true})
        cy.wait(1000)

        cy.get('.ddm-form-builder-app').within(() => {

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group')
               .should('have.class', 'has-error')
        
            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group')
               .should('have.class', 'has-error')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group')
                .should('have.class', 'has-error')

            cy.get('.form-builder-layout .ddm-field[data-field-name="WhatIsYourName"] .form-group span.form-feedback-group .form-feedback-item')
            .should('contain', 'Este campo é obrigatório.')

            cy.get('.ddm-field[data-field-name="WhatIsTheDateOfYourBirth"] .form-group span.form-feedback-group div.form-feedback-item')
            .should('contain', 'Este campo é obrigatório.')

            cy.get('.ddm-field[data-field-name="WhyDidYouJoinTheTestingArea"] .form-group span.form-feedback-group div.form-feedback-item')
            .should('contain', 'Este campo é obrigatório.')
        }) 
    })
})       