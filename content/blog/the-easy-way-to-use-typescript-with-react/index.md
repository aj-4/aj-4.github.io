---
title: The easy way to use Typescript with React
description: test
date: "2019-06-23T22:12:03.284Z"
---

Typescript has been one of the [most loved languages](https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted) on stack overflow for several years running.

![Typescript is the number 3 most loved language on stack overflow](./loved-languages.png)

I didn’t really understand the value of types until I worked on a team.

When multiple people are contributing to a project TS makes it a lot harder to write javascript bugs, and you can trust functions without reading their definitions.

In this video I show 
- the way to start a typescript React app in 10 seconds
- TS + React basics
- how to set up TS + React + webpack from scratch for a project
- how to refactor a React app to TS

`youtube:https://www.youtube.com/embed/2Xc9gXyf2G4`

### If you’re starting from scratch, setting up a TS app is as simple as adding a parameter to create-react-app.

`npx create-react-app my-app --typescript`

i would recommend starting with [create-react-app](https://facebook.github.io/create-react-app/docs/adding-typescript) as a “sandbox” to figure out how things work.

### You can start playing around with things like...

#### Interfaces for props

These types will be enforced anywhere I use this component, both on compilation and even in your IDE.

`gist:aj-4/fb470eba79f29b66f7acdd38d3045762`

Alternatively, I can set name as an optional field with the question mark

```
interface IProps {
    name?: string,
    showTime: boolean
}
```

#### Structs 
Similar to C or Golang, we can have structured objects.

TS enforces rules on objects through an entire data path -- you can expect your object to always be a certain shape, regardless of where it is.

It's best practice to put most (non-prop) interfaces in `.d.ts` files, which do not need to be imported

`gist:aj-4/764604bb562b1c137a0e1721fab182b8`

Here we have a person struct with multiple fields.

Good-bye "cannot read property x of undefined" errors

#### Function typing 
We make input and return types explicit.

It's useful because you can now “trust” functions to do what they say, without reading definitions.

`gist:aj-4/51baa06a7f2c484bd081ebfcf6500b5e`

Here we expect the person interface as input and return a formatted string message.

## If you want to set up TS manually...

By using the typescript webpack loader `ts-loader`, our transpiler will handle `.tsx` files and also act as a “compiler” to catch errors.

If your IDE is set up right (VS code is out of the box) then you will also see errors there.

The end result: we will get the exact same build files with a much improved developer experience.

### The main steps you need to follow are:

1. install dependencies (that you haven't already):

```
yarn add react &&
yarn add typescript ts-loader webpack webpack-cli --dev
```

2. Add a `webpack.config.js` with `ts-loader`
`gist:aj-4/4e5db5e5af5ef8d278e5a640056efc35`

the important parts are setting the entry point as `index.tsx` and the `ts-loader` rule.

If you are refactoring to `ts`, simply add to `ts-loader` to the `rules` section.

```
...
rules: [
      ...
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
```

3. Next, create a minimal `tsconfig.json` in the project root.
`gist:aj-4/49dfc0b096bba7100cb768d6302d78cb`

the full set of rules for `tsconfig.json` are [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) -- vs code also gives you descriptions on mouse-over.

4. Now write your `.tsx` files (or change `.js(x)` files to `.tsx`) 
`gist:aj-4/5db7ecba8be67abd10efef45746c34cc`

5. Test by building your app with webpack and fix errors
`yarn webpack`

#### done!