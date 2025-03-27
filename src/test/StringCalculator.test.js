import { add } from "../utils/AddUtils";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test("returns the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("handles an unknown amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });
});
