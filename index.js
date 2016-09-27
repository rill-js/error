'use strict'
var STATUS_CODES = require('@rill/http').STATUS_CODES

module.exports = HttpError

function HttpError (code, message, meta) {
  this.name = 'HttpError'
  this.code = code
  this.message = message || STATUS_CODES[code]
  for (var key in meta) this[key] = meta[key]
  if (Error.captureStackTrace) Error.captureStackTrace(this, HttpError)
  else Error.call(this)
}

HttpError.prototype = new Error
