LAB 12: Users and Authentication on the backend
===

## Goal

(Please work on a dev branch and make a PR to try and trigger the CI)

Allow users to sign up for TODO app and handle todo items by user

User `npx create-alchemy-sql-be todos-project` to spin up a new project. Fix the `/data` scripts. And push it to github.

**Work in vertical slices!**

### Database Schema

```js
TODO {
    id: 3,
    todo: 'wash the dishes',
    completed: false,
}
```

1. Change the animals shchema into a a todos schema with a `completed` and a `todo` and a `user_id` property to your `create-tables.js`. Also, update your other seed data scripts (`load-seed-data` ans `drop tables`) to account for todos. Also, update your seed data.
1. Run your database scripts to fully drop, recreate, and seed your database.
1. Verify that your `GET /todos` endpoint works and shows the seed todos
1. Commit your changes

#### Todos in User Context

Add routes to: 
1) Get all of a user's todos
1) Create a new todo for a user
1) Update a todo to make it `completed: true`

Add tests in Jest to show that this is working in success states.

## Points Break Down

Looking For | Points (10)
:--|--:
[ ] SERVER: Deployed GET todos route correctly enforces user-specific actions | 3
[ ] SERVER: Deployed POST todos route correctly enforces user-specific actions | 2
[ ] SERVER: Deployed PUT todos route correctly enforces user-specific actions | 2
[ ] TESTS: Add Jest test for success states in GET, POST, and PUT routes| 3