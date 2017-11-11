import { STATUS_CODES } from "@rill/http";

class HttpError implements Error {
  public code: number;
  public name: string;
  public message: string;
  [x: string]: any;

  /**
   * Creates a Rill HttpError.
   *
   * @param statusCode The http status code for the error.
   * @param statusMessage The http status message for the error.
   * @param metaData An object to be merged with the error.
   */
  constructor(statusCode: number, statusMessage?: string, metaData?: any) {
    if (typeof statusCode !== "number") {
      throw new TypeError("Rill#HttpError.fail: Status code must be a number.");
    }

    if (typeof metaData === "object") {
      for (const key in metaData) {
        this[key] = metaData[key];
      }
    }

    this.code = statusCode;
    this.name = "HttpError";
    this.message = statusMessage || STATUS_CODES[statusCode];

    Error.call(this, statusMessage);
    /* istanbul ignore else  */
    if ((Error as any).captureStackTrace) {
      (Error as any).captureStackTrace(this, HttpError);
    }
  }
}

HttpError.prototype = Object.create(Error.prototype);
module.exports = exports = HttpError;
export default HttpError;

/**
 * Throw an http error.
 *
 * @param code The status code for the error.
 * @param message Optional status message.
 * @param meta Optional object to merge onto the error.
 * @throws {HttpError}
 */
export function fail(code: number, message?: string, meta?: any) {
  throw new HttpError(code, message, meta);
}

/**
 * Throw an http error.
 *
 * @param value The value to test for truthyness.
 * @param code The status code for the error.
 * @param message Optional status message.
 * @param meta Optional object to merge onto the error.
 * @throws {HttpError}
 */
export function assert(value: any, code: number, message?: string, meta?: any) {
  if (!value) {
    fail(code, message, meta);
  }
}
