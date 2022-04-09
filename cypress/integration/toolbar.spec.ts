describe('Toolbar', () => {
    it('Toggle Light Mode!', () => {
        cy.visit('')
        cy.get('li:nth-child(1)').click()
        cy.get('mat-grid-tile:nth-child(27)').click().should('have.css', 'background-color', 'rgb(163, 216, 88)')
    })

    it('Should open Github!', () => {
        cy.visit('')
        cy.get('li:nth-child(2)').click()
        cy.url().should('include', 'https://github.com/DavidKf/post-app')
    })

});