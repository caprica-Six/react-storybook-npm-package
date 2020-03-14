### How to register a simple React component with Storybook and npm

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Storybook](https://storybook.js.org/docs/guides/guide-react/)

## Available Scripts

In the app directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run storybook`

Run Storybook

### `yarn run deploy-storybook -- --out=.out`

Deploy storybook to github pages with [storybook-deployer](https://github.com/storybookjs/storybook-deployer)
If you need to configure the output directory you can supply the out flag.

Publish npm package:

1. Update package version in package.json or npm version 1.0.1
2. ### `yarn build`
3. ### `yarn publish --access=public` - if the package is free
