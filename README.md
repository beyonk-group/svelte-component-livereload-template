<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

# Svelte Component Template

by [@antony](https://github.com/antony)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/svelte-component-livereload-template.svg?style=shield)](https://circleci.com/gh/beyonk-adventures/svelte-component-livereload-template) [![svelte-v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

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

`npm run dev`

## Building

`npm run build`

## Testing

Tests are in `test/*`. Edit files here, and run:

`npm run test`

## Publishing

You can set a component name in `package.json` and publish as usual with `npm publish`.

However, see the following section to make your life a lot easier.

## Continuous Deployment

You can set up CI/CD with CircleCI in two easy steps:

* Head to [CircleCI](https://www.circleci.com) and add this project.
* Add your NPM token as an environment variable called NPM_TOKEN in the org-global context.

Whenever you commit to master, tests and linting will be run.

Whenever you tag and push to git, a npm release will automatically be made:

```bash
npm version <patch|minor|major>
git push && git push --tags
```