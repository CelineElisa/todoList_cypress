export class TodoPage {

    visit() {
        cy.visit('https://example.cypress.io/todo')
    }

    seeXItems(number) {
        cy.get('.todo-list li').should('have.length', number)
    }

    seeFirstItem(text) {
        cy.get('.todo-list li').first().should('have.text', text)
    }
    
    seeLastItem(text) {
        cy.get('.todo-list li').last().should('have.text', text)
    }

    seeItem(text) {
        cy.get('.todo-list li').should('have.text', text)
    }

    addItem(text){
        cy.get('[data-test="new-todo"]').type(`${text}{enter}`)
    }

    checkItem(text) {
        cy.contains(text).parent().find('[type="checkbox"]').check()
    }
    
    seeCheckedItem(text) {
        cy.contains(text).parents('li').should('have.class', 'completed')
    }

    clickOnButton(text) {
        cy.contains(text).click().should('have.class', 'selected')
    }

    cantSeeText(text) {
        cy.contains(text).should('not.exist')
    }

    clearCompleted() {
        cy.contains('Clear completed').click()
        cy.contains('Clear completed').should('not.exist')
    }
}