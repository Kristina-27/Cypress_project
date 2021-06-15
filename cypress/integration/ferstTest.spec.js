///<reference types="Cypress" />


// describe('Mobile phone replenishment', () => {

//     context("Replenishment less than the allowed amount", () => { 
//         it("Show error: Minimum of the replenisment 1 UAH", () => {});
//     });
    
// });
// it('By ID', () => {
//     cy.visit("https://www.facebook.com/");
//     cy.get('#email')
// })

// it ('By Class', () => {
//     cy.visit("https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell");
//     cy.get('.DocSearch-Button-Placeholder')
// })

// it('By Tag value', () => {
//     cy.visit("https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell");
//     cy.get('nav')
// })

// it('By Tag value', () => {
//     cy.visit("https://www.facebook.com/");
//     cy.get('[name="pass"]')
// })

// it('By Diffent Tag', () => {
//     cy.visit("https://www.facebook.com/");
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })

// it.only('By Diffent Tapes', () => {
//     cy.visit("https://www.facebook.com/");
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })
//comment
it('Using Get with Find and Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open");
    cy.get('table').find('td').find('div').find('button').eq('5');
})

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/commands/wrap#Syntax");
    cy.get('nav').find('a').find('ul').find('li').find('a').eq(0);
})