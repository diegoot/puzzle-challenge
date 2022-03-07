# About this project

It tries to resolved the challenge [here](https://github.com/lassmann/puzzle-challenge).

## How to run locally

1. `git clone https://github.com/diegoot/puzzle-challenge.git`
2. `cd puzzle-challenge`
3. `yarn install`
4. `yarn start`

Now the app is available at http://localhost:3000

## Run tests

`yarn test`

## About the implemented resolution

I used create-react-app to bootstrapped the project.

This is not a really big app but I tried to follow a folder structure that would also fit a bigger app if necessary. With that in mind I implemented a 'by feature' structure, that way I have all the things related to a feature (module or the name we want use) together which is in my opinion easier to maintain in bigger apps. In this way for example if you have to remove a feature of your app you do not have to go folder by folder (components, hooks, etc etc) looking for the code to delete.

I am also using absolute paths because they are easier to understand (you do not need to think where you will end with ../../) and in general your imports keep working if you move things around. The only time where I use relative paths is to import things from the same folder because they will probably always be together.

I am using hooks, built-in and custom ones. The way I decided about a custom hook or a helper function was taking two things into account: 1. if I need to use built-in hooks in my helper code 2. where I need my helper code. For that reason I have a useKeyPress hook and a set of helper functions to validate cells.

To handle app state I used redux toolkit. It is a library built around redux which tries to simplify the work needed when using it. I could have use another approach too, like react context API for example, that is a matter of case in general unless we have performance issues or similar but I think in this case the app is pretty fluid.

## Possible technical improvements

There are probably many things that could be improved, one that I think is really useful is integrating prettier with eslint and setting up some githooks to guarantee what code is uploaded the to repo. For this challenge I used the prettier plugin plus a .prettierrc config file but that is not enough in bigger apps/teams.

## Main libraries added

- styled-components
- react-router-dom
- redux-toolkit
- react-redux
- redux

## Posibility to expand

Because of the way I implemented the solution a few useful things should be pretty easy to implement, for example:

- Adding things to the setup page, like board size, initial moves amount, etc.
- I did the board proportional to a variable in the theme so I could easily add a magnifying glass icon for people with disabilities.
- Using the theme we can normilize the typography, colors, annd other things.
- Adding a high scores page should be easier too because I have a router in place. We could save the scores in the store, local storage or even implement an endpoint since redux toolkit already have middlewares to handle async code.
