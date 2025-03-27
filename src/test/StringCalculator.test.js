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

  test("supports new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n3|4|5")).toBe(12);
  });

  test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed -2,-4");
    expect(() => add("1,-2,-3, 4")).toThrow("Negative numbers not allowed -2,-3");
  });
});
