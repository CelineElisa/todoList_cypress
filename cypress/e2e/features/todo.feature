Feature: Todo list

    Background:
        Given the user is on the todo list page

    Scenario: The user can see the todo list
        Then he can see two todo items by default

    Scenario: The user can add new todo items
        When he adds an item
        Then he can see the new item on the list
  
    Scenario: The user can check off an item as completed
        When he checks an item as completed
        Then he can see the item as completed

    Scenario: The user can filter for uncompleted tasks
        Given there is one uncompleted task and one completed task
        When he clicks on the active button
        Then he can see the uncompleted tasks

    Scenario: The user can filter for completed tasks
        Given there is one uncompleted task and one completed task
        When he clicks on the completed button
        Then he can see the completed tasks

    Scenario: The user can delete all completed tasks
        Given there is one uncompleted task and one completed task
        When he clicks on the clear completed button
        Then he can't see any completed task
