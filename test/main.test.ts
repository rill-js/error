import * as assert from "assert";
import HttpError, { assert as httpAssert, fail as httpFail } from "../src";

describe("@rill/error", () => {
  describe("HttpError", () => {
    it("should require a status code as a number", () => {
      assert.throws(() => new HttpError(undefined as any));
      assert.throws(() => new HttpError("100" as any));
    });

    it("should accept a status, message and meta data", () => {
      const error = new HttpError(200, "Really Ok", { x: 1 });
      assert.equal(error.code, 200);
      assert.equal(error.message, "Really Ok");
      assert.equal(error.x, 1);
    });

    it("should default status message", () => {
      const error = new HttpError(200);
      assert.equal(error.message, "OK");
    });
  });

  describe("fail", () => {
    it("should throw an http error", () => {
      try {
        httpFail(500);
        assert.fail("Fail did not throw");
      } catch (err) {
        assert.ok(err instanceof Error);
        assert.ok(err instanceof HttpError);
        assert.equal(err.message, "Internal Server Error");
      }
    });
  });

  describe("assert", () => {
    it("should be fine with truthy values", () => {
      httpAssert(true, 500);
      httpAssert({}, 500);
      httpAssert([], 500);
      httpAssert(1, 500);
      httpAssert("hi", 500);
    });
    it("should throw an http error on falsey values", () => {
      assertThrowsHttpError(() => httpAssert(false, 500));
      assertThrowsHttpError(() => httpAssert("", 500));
      assertThrowsHttpError(() => httpAssert(0, 500));
      assertThrowsHttpError(() => httpAssert(undefined, 500));
      assertThrowsHttpError(() => httpAssert(null, 500));

      /**
       * Utility to test that a proper http error was thrown.
       */
      function assertThrowsHttpError(fn) {
        try {
          fn();
          assert.fail("Did not throw server error.");
        } catch (err) {
          assert.ok(err instanceof Error);
          assert.ok(err instanceof HttpError);
          assert.equal(err.message, "Internal Server Error");
        }
      }
    });
  });
});
