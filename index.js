'use strict'
var STATUS_CODES = require('@rill/http').STATUS_CODES
HttpError.prototype = new Error
HttpError.fail = fail
HttpError.assert = assert
module.exports = HttpError

/**
 * Creates a Rill HttpError.
 *
 * @param {String|Number} code - The status code for the error.
 * @param {String} [message] - Optional status message.
 * @param {Object} [meta] - Optional object to merge onto the error.
 */
function HttpError (code, message, meta) {
  if (typeof code !== 'number') throw new TypeError('Rill#HttpError.fail: Status code must be a number.')

  this.name = 'HttpError'
  this.code = code
  this.message = message || STATUS_CODES[code]

  for (var key in meta) this[key] = meta[key]
  if (Error.captureStackTrace) Error.captureStackTrace(this, HttpError)
  else Error.call(this)
}

/**
 * Throw an http error.
 *
 * @param {String|Number} code - The status code for the error.
 * @param {String} [message] - Optional status message.
 * @param {Object} [meta] - Optional object to merge onto the error.
 * @throws HttpError
 */
function fail (code, message, meta) {
  throw new HttpError(code, message, meta)
}

/**
 * Throw an http error if a value is not truthy.
 *
 * @param {*} val - The value to test for truthyness.
 * @param {String|Number} code - The status code for the error.
 * @param {String} [message] - Optional status message.
 * @param {Object} [meta] - Optional object to merge onto the error.
 * @throws HttpError
 */
function assert (val, code, message, meta) {
  if (!val) fail(code, message, meta)
}
