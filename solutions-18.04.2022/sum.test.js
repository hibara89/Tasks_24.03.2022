const sum = require("./sum");

test("properly adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 0)).toBe(1);
});

test("properly adds two numbers", () => {
  expect(sum(5, -2)).toBe(3);
});

test("properly adds two numbers", () => {
  expect(sum(6, -2)).toBe(4);
});
