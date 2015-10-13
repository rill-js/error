# Error

The http error function used in Rill.

# Installation

#### Npm
```console
npm install @rill/error
```

# Example
```javascript
var HttpError = require('@rill/error');

new HttpError(404);//-> [HttpError Not Found]
```

# API
+ **HttpError(statusCode, [statusMessage], [metaData])** : Creates a new HttpError.

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
