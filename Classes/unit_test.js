export const withSubmit = process.env.SUBMIT === "true" || false;

export function describe(name, fn) {
  console.log(`Running tests for ${name}`);
  fn();
}

export function it(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
  } catch (e) {
    console.log(`✗ ${description}: ${e.message}`);
  }
}

export const assert = {
  strictEqual(actual, expected) {
    if (actual !== expected) {
      throw new Error(`Expected ${expected}, but got ${actual}`);
    }
  },

  throws(fn, expectedMessage) {
    let threw = false;
    try {
      fn();
    } catch (e) {
      threw = true;
      if (expectedMessage && e.message !== expectedMessage) {
        throw new Error(`Expected error message "${expectedMessage}", but got "${e.message}"`);
      }
    }
    if (!threw) {
      throw new Error("Expected function to throw, but it did not");
    }
  },
};
