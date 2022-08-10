const sum = require("./sum_arguments");

describe("Sum the given value", () => {
  test("Sum mutliple values", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
  test("Sum decimal values", () => {
    expect(sum(0.3, 0.8)).toBe(1.1);
  });
  test("Sum with infinity", () => {
    expect(sum(1, 2, Infinity)).toBe(Infinity);
  });
  test("Ratio values", () => {
    expect(sum(1 / 2, 3 / 4)).toBe(5 / 4);
  });
  test("{} !== {}", () => {
    expect({}).not.toBe({});
  });
});
