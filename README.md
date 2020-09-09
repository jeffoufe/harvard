## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Technologies used

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- TypeScript
- Material UI
- Redux / Redux Saga
- Jest / Enzyme
- react-infinite-scroll-component (https://www.npmjs.com/package/react-infinite-scroll-component)

## Improvements to make

- There are definitely a lot of things to improve in the design. I decided to load the prints by sets of 12 objects as I'm using a responsive grid to display them and 12 is a multiple of 4, 3, 2 and 1. I also decided to use the Skeleton component to show the user that the next objects are being fetched.
- End To End Testing (using Cypress.io) : This is not really mandatory for an app of this size but it is for an application with more features
- The React Infinite Scroll Component contains deprecated code but it's definitely a huge gain of time.