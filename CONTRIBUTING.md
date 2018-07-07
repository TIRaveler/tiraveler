# Contributing Guide
Any contribution is deeply appreciated! Credit will be given.

## Setup
After forking you must do the following:

``` bash
# Clone fork of TIRaveler
git clone https://github.com/TIRaveler/tiraveler.git

# Move into TIRaveler folder
cd tiraveler

# Install Dependencies
npm install

# Build Webpack
npm run build
```

## Running tests
Uses jest for testing. Please run the following:

``` bash
# Run all tests
npm run test
```

## Style and Linting
Adheres to [Airbnb Styleguide](https://github.com/airbnb/javascript) with
the following exception(s)
- console logging is allowed inside the database and server

Installing an Eslint plugin for your desired editor is recomended.
As a fallback you may always run in terminal.

``` bash
# Lint files
npm run lint
```

## Publishing
Uses [Travis CI](https://travis-ci.org/) for continuous integration,
     [Snyk](https://snyk.io/)            for vulnerability testing,
     [Coveralls](https://coveralls.io/)  for coverage testing.

## Pull Requests
Before submitting all pull requests must meet these guidelines:

1. If fixing a bug, must include tests. Tests must fail before bug fix and
pass afterwards.
1. If submitting a feature, must include tests, and docs must be updated.
1. Please rebase and resolve conflicts before submitting.