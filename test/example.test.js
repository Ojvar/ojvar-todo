describe("Sum numbers", () => {
  test("it should sum two numbers correctly", sumTest);
});

/**
 * Test sum function
 */
function sumTest() {
  const sum = 1 + 2;
  const expectedResult = 3;

  expect(sum).toEqual(expectedResult);
}