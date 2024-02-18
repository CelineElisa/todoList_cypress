import { TodoPage } from '../../support/pages/todo_page'

const todoPage = new TodoPage()
const newItem = 'Grocery shopping'

Given('the user is on the todo list page', () => {
    todoPage.visit()
})

Then('he can see two todo items by default', () => {
    todoPage.seeXItems(2)
    todoPage.seeFirstItem('Pay electric bill')
    todoPage.seeLastItem('Walk the dog')
})

When('he adds an item', () => {
    todoPage.addItem(newItem)
})

Then('he can see the new item on the list', () => {
    todoPage.seeXItems(3)
    todoPage.seeLastItem(newItem)
})

When('he checks an item as completed', () => {
    todoPage.checkItem('Pay electric bill')
})

Then('he can see the item as completed', () => {
    todoPage.seeCheckedItem('Pay electric bill')
})

Given('there is one uncompleted task and one completed task', () => {
    todoPage.checkItem('Pay electric bill')
})

When('he clicks on the active button', () => {
    todoPage.clickOnButton('Active')
})

Then('he can see the uncompleted tasks', () => {
    todoPage.seeXItems(1)
    todoPage.seeItem('Walk the dog')
    todoPage.cantSeeText('Pay electric bill')
})

When('he clicks on the completed button', () => {
    todoPage.clickOnButton('Completed')
})

Then('he can see the completed tasks', () => {
    todoPage.seeXItems(1)
    todoPage.seeItem('Pay electric bill')
    todoPage.cantSeeText('Walk the dog')
})

When('he clicks on the clear completed button', () => {
    todoPage.clearCompleted()
})

Then('he can\'t see any completed task', () => {
    todoPage.seeXItems(1)
    todoPage.seeItem('Walk the dog')
    todoPage.cantSeeText('Pay electric bill')
})