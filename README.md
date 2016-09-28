<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/error
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/error">
    <img src="https://img.shields.io/npm/v/@rill/error.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/error">
    <img src="https://img.shields.io/npm/dm/@rill/error.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

The http error function used in Rill. Automatically generates error messages and codes

# Installation

```console
npm install @rill/error
```

# Example
```javascript
var HttpError = require('@rill/error')

new HttpError(404) //-> [HttpError Not Found]
HttpError.fail(404) //-> throws [HttpError Not Found]
HttpError.assert(false, 404) //-> throws [HttpError Not Found]
HttpError.assert(true, 404) //-> Does nothing
```

# API
+ **HttpError(statusCode, [statusMessage], [metaData])** : Creates a new HttpError.
+ **HttpError.fail(statusCode, [statusMessage], [metaData])** : Creates a new HttpError and automatically throws it.
+ **HttpError.assert(value, statusCode, [statusMessage], [metaData])** : Creates a new HttpError and automatically throws it if value is falsey.

### Contributions

Please feel free to create a PR!
