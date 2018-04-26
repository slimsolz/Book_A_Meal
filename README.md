[![Build Status](https://travis-ci.org/slimsolz/Book_A_Meal.svg?branch=ch-setup-server-156990961)](https://travis-ci.org/slimsolz/Book_A_Meal)
[![Coverage Status](https://coveralls.io/repos/github/slimsolz/Book_A_Meal/badge.svg?branch=ft-setup-menu-156935669)](https://coveralls.io/github/slimsolz/Book_A_Meal?branch=ft-setup-menu-156935669)


# Book_A_Meal
Book_A_Meal is an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.

### Features
- Caterer Sign up: `POST api/v1/caterer/signup`
- Caterer Sign in: `POST api/v1/caterer/signin`
- Customer Sign up: `POST api/v1/customer/signup`
- Customer Sign in: `POST api/v1/customer/signin`
- List all meals: `GET api/v1/meals/:catererId`
- Add new meal: `POST api/v1/meals`
- Update a meal: `PUT api/v1/meals/:catererId/:id`
- Delete a meal: `DELETE api/v1/meals/:catererId/:id`
- Set menu for the day: `POST api/v1/menu/:catererId`
- Get menu for the day: `GET api/v1/menu`

#### Dependencies
- Express JS: Web application framework for Node.js.

#### Dev Dependencies
- Coveralls: Helps to show which part code is not covered by test suite
- Eslint: Linting utility for JavaScript and JSX
- Babel: The compiler for writing next generation JavaScript.
- Mocha & Chai: Testing the Web Application
- Chai: TDD assertion library for node
- Nodemon: Utility that will monitor for any changes in your source and automatically restart your server.
