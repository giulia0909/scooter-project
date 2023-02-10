// username: String
// password: String
// age: In years
// loggedIn: boolea

const User = require("../src/User");

// User tests here
describe("user integrity checks", () => {
  const user = new User("General Grievous", "password123", 30, true);
  test("has correct properties", () => {
    expect(user).toHaveProperty("username", "General Grievous");
    expect(user).toHaveProperty("password", "password123");
    expect(user).toHaveProperty("age", 30);
    expect(user).toHaveProperty("loggedIn", true);
  });
});

// test username

// test password

// test age

// test login

// test logout
