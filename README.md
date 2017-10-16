<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/error
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Prettier -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- Travis build -->
  <a href="https://travis-ci.org/rill-js/@rill/error">
  <img src="https://img.shields.io/travis/rill-js/@rill/error.svg" alt="Build status"/>
  </a>
  <!-- Coveralls coverage -->
  <a href="https://coveralls.io/github/rill-js/@rill/error">
    <img src="https://img.shields.io/coveralls/rill-js/@rill/error.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/error">
    <img src="https://img.shields.io/npm/v/@rill/error.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/error">
    <img src="https://img.shields.io/npm/dm/@rill/error.svg" alt="Downloads"/>
  </a>
  <!-- Size -->
  <a href="https://npmjs.org/package/@rill/error">
    <img src="https://img.shields.io/badge/size-766b-green.svg" alt="Browser Bundle Size"/>
  </a>
</h1>

This module is used internally by Rill but is extracted for convenience.
Utility for generating HttpError's with messages, codes and meta data.

# Installation

```console
npm install @rill/error
```

# Example
```javascript
import HttpError, { assert, fail } from "@rill/error";

new HttpError(404); //-> [HttpError Not Found]
HttpError.fail(404); //-> throws [HttpError Not Found]
HttpError.assert(false, 404); //-> throws [HttpError Not Found]
HttpError.assert(true, 404); //-> Does nothing
```

# API
+ **HttpError(statusCode, [statusMessage], [metaData])** : Creates a new HttpError.
+ **HttpError.fail(statusCode, [statusMessage], [metaData])** : Creates a new HttpError and automatically throws it.
+ **HttpError.assert(value, statusCode, [statusMessage], [metaData])** : Creates a new HttpError and automatically throws it if value is falsey.

### Contributions

Use `npm test` to run tests.
Please feel free to create a PR!
