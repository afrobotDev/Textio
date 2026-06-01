import { describe, it, assert, withSubmit } from "./unit_test.js";
import { sleep } from "./non_blocking.js";

await describe("sleep function delays execution", async () => {
  const allowedDiscrepancy = 10;
  const runCases = [50, 100, 200];

  const submitCases = runCases.concat([0]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (const test of testCases) {
    await it(`should block execution for at least ${test}ms`, async () => {
      let [start, end] = [0, 0];
      try {
        start = Date.now();
        await sleep(test);
        end = Date.now();
      } catch (e) {
        console.log(e.message);
      }

      assert.greaterThan(
        end - start,
        test - allowedDiscrepancy,
        `Expected at least ${test}ms delay, got ${end - start}ms`,
      );
    });
  }

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});

