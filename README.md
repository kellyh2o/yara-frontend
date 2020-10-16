# ClassApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Initial setup 

First install yarn with this command:
```
brew install yarn
```

_I ran into some issues with npm during the end-to-end testing week, so decided to use yarn instead of npm_

Now that yarn is installed, you will want to use yarn to install the node modules and packages needed to run the app. Do so with the following command:
```
yarn install
```

## Development server

Run this command to serve up the app:
```
yarn start
```
_The above command runs `ng serve` under the covers_


Navigate to `http://localhost:4200/` in Chrome to view the app. 

## Running unit tests

Run this command to run the unit tests via [Karma](https://karma-runner.github.io):
```
yarn test
```
_The above command runs `ng test` under the covers_


## Running end-to-end tests

Before you run the end-to-end tests, you must first create a user with the following credentials:

```
username: hello
password: hello
```

The easiest way to do this is to run the app via `yarn start` and register a new user using the UI at `http://localhost:4200/`. Then stop running the app (ctrl + C).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

_The demo user created above with the 'hello' credentials are necessary, because the end-to-end tests have to perform a log in step at some point, meaning they need credentials to log in with._

