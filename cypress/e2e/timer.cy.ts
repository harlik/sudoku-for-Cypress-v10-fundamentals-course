describe('Timer', function() {
    it('ticks', function() {
        cy.visit('/');
        for (let i = 1; i <= 10; i++) {
            const timerString = (seconds: number) => seconds < 10 ? `00:0${seconds}` : `00:${seconds}`;
            cy.contains('.status__time', timerString(i));
        }
    });
})
