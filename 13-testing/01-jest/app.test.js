const sum = require("./app")

test('sum number', () => { 
  expect(sum(1,1)).toBe(2)
  expect(sum(1,2)).toBe(3)
  expect(sum(2,2)).toBe(4)
})