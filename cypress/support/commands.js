// Cypress.Commands.add('waitForLoadAnimationToDisappear', (timeout) =>{
//     cy.get('#ddmFormvYtgCXFVcontainer.ddm-form-builder-app-not-ready', {timeout: 5000}).should('not.be.visible')
// })
Cypress.Commands.add('verifySuccessfulMessage', (timeout) =>{
    cy.get('div', {timeout: timeout ? timeout: 10000}).should(($all) => {
        expect($all).to.contain('Success:Your request completed successfully.')
    })
})


