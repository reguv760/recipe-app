This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Recipe App based on [Hamza Mirza](https://www.youtube.com/watch?v=PbJt7-a2274) tutorial which connects to Food2Fork API.

Demo located at: [http://reguv760.github.io/recipe-app/](http://reguv760.github.io/recipe-app/).

## Features

**React Router** is a component that dynamically generates URL's based on retreived data.<br>

#### `npm install react-router-dom`

**Bootstrap4** is a CSS library for responsive layouts.<br>

#### `npm install bootstrap@latest`

**dotEnv** is a dependency which "hides" selective data from being visible in HTML.<br>

#### `npm install dotenv`

**gh-pages** is a devDependency which builds and publishes website then deploys to your GitHub repo as a seperate branch. Configure URL location under Settings > GitHub Pages > Source: gh-pages branch

### `npm install gh-pages --save`

After installation add the following line in package.json:
`"homepage": "http://<username>.github.io/<repo>"`

**HashRouter** is used instead of **BrowserRouter** in Router component to enable nested links deployed on GitHub via gh-pages.<br>

#### `npm install dotenv`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
