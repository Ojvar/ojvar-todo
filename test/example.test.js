describe("Sum numbers", () => {
  test("it should sum two numbers correctly", sumTest);
  test("it should sum two numbers incorrectly", sumFailedTest);
});

/**
 * Test sum function
 */
function sumTest() {
  const sum = 2 + 2;
  const expectedResult = 4;

  expect(sum).toEqual(expectedResult);
}

/**
 * Test sum-failed function
 */
function sumFailedTest() {
  const sum = 1 + 2;
  const expectedResult = 4;

  expect(sum).toEqual(expectedResult);
}