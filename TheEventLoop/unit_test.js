export const withSubmit = process.env.SUBMIT === "true" || false;

export async function describe(name, fn) {
  console.log(`Running tests for ${name}`);
  await fn();
}

export async function it(description, fn) {
  try {
    await fn();
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
  deepEqual(actual, expected) {
    if (actual === expected) return;
    if (Array.isArray(actual) && Array.isArray(expected)) {
      if (actual.length !== expected.length) {
        throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
      }
      for (let i = 0; i < actual.length; i++) {
        this.deepEqual(actual[i], expected[i]);
      }
    } else if (actual && expected && typeof actual === "object" && typeof expected === "object") {
      const actualKeys = Object.keys(actual);
      const expectedKeys = Object.keys(expected);
      if (actualKeys.length !== expectedKeys.length) {
        throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
      }
      for (const key of actualKeys) {
        if (!(key in expected)) {
          throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
        }
        this.deepEqual(actual[key], expected[key]);
      }
    } else if (actual !== expected) {
      throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
    }
  },
  greaterThan(actual, expected, message) {
    if (actual <= expected) {
      throw new Error(message || `Expected ${actual} to be greater than ${expected}`);
    }
  },
};
