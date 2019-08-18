# Svelte Component Template

by [@antony](https://github.com/antony)

## Features

* Svelte 3
* Automatic NPM Publish support
* LiveReload
* Unit testing with @testing-library/svelte and Jest
* Fetch mocking for tests
* Eslint (@beyonk) / "Standard" Linting

## Installation

npx degit git@github.com:beyonk-adventures/svelte-component-livereload-template.git

## Usage

Edit `src/Component.svelte`

`npm run watch`

## Building

`npm run build`

## Testing

Tests are in `test/*`. Edit files here, and run:

`npm run test`

## Building

`npm run build`

## Continuous Deployment

You can set up CI/CD with CircleCI in two easy steps:

Head to [CircleCI](https://www.circleci.com) and add this project.

Whenever you commit to master, tests and linting will be run.

Whenever you tag and push to git, a npm release will automatically be made:

```bash
npm version <patch|minor|major>
git push && git push --tags
```