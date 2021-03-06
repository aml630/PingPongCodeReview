describe("listNumbers", function () {
  it("should take a user input and return all numbers leading up to what the user entered into an array.", function () {
    expect(listNumbers(5)).to.equal[1,2,3,4,5]
  });
});

describe("replaceNumbers", function () {
  it("should look through the numbers array and replace all values divisible by 3, 5, and 15 with their appropriate strings and print them to a list", function () {
    expect(replaceNumbers(5)).to.equal("<li>1</li><li>2</li><li>Ping</li><li>4</li><li>Pong</li>")
  });
});
