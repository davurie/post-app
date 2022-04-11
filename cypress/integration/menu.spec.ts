describe('Menu', () => {
    beforeEach(() => {
        cy.visit('')
        sessionStorage.clear();
    });

    it('Toggle Light Mode!', () => {
        cy.get('li:nth-child(1)').click()
        cy.get('mat-grid-tile:nth-child(27)').click().should('have.css', 'background-color', 'rgb(163, 216, 88)')
    });

    it('Should open Github!', () => {
        cy.get('li:nth-child(2)').click()
        cy.url().should('include', 'https://github.com/DavidKf/post-app')
        cy.visit('')
    });
});