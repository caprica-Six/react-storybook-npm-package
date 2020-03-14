## How to register a simple React component with Storybook and npm

### Install

#### `npm i '@caprica-six/custom-button'`

#### `yarn add '@caprica-six/custom-button'`

### Usage

```
import { CustomButton } from '@caprica-six/custom-button'

const MyComponent = () => {
    return (
        <CustomButton>Default</CustomButton>
    )
}
```

### Available Scripts

#### `yarn start`

#### `yarn run storybook`

Run Storybook

#### `yarn run deploy-storybook -- --out=.out`

Deploy storybook to github pages with [storybook-deployer](https://github.com/storybookjs/storybook-deployer)
If you need to configure the output directory you can supply the out flag.

Publish npm package:

1. Update package version in package.json or npm version 1.0.0
2. #### `yarn build`
3. #### `yarn publish --access=public`

### Keywords

[React](https://github.com/facebook/create-react-app) [Storybook](https://storybook.js.org/docs/guides/guide-react/)
