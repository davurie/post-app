describe('Posts', () => {
    beforeEach(() => {
        cy.visit('')
        sessionStorage.clear();
    });
    
    it('Toggle id and userId!', () => {
        cy.get('mat-grid-tile:nth-child(27)').contains('27')
        cy.get('mat-grid-tile:nth-child(27)').click().contains('3')
    });

    it('Toggle like icons!', () => {
        cy.get('mat-grid-tile:nth-child(27)').contains('favorite_border')
        cy.get('mat-grid-tile:nth-child(27)').click().contains('favorite')
    });

    it('Space Invaders!', () => {
        const invaderArray = ['5', '6', '7', '12', '14', '15', '16', '17', '18', '20', '22', '23', '24', '26', '28', '29', '30', '33', '34', '35', '36', '37', '38', '39', '43', '45', '47', '49', '52', '53', '59', '60'];
        invaderArray.forEach(block => cy.get(`mat-grid-tile:nth-child(${block})`).click());
    });
});
