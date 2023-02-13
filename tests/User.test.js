// username: String
// password: String
// age: In years
// loggedIn: boolea

const User = require("../src/User");

// User tests here
describe("user integrity checks", () => {
  const user = new User("General Grievous", "password123", 65, true);
  test("has correct properties", () => {
    expect(user).toHaveProperty("username", "General Grievous");
    expect(user).toHaveProperty("password", "password123");
    expect(user).toHaveProperty("age", 65);
    expect(user).toHaveProperty("loggedIn", true);
  });
});

// test username
describe("Username", () => {
  let user;
  beforeEach(() => {
    user = new User("Luke", "skywalker", 25, false);
  });

  test("Can be read", () => {
    expect(user.username).toBe("Luke");
  });

  test("Cannot be set", () => {
    const setUsername = () => {
      user.username = "Anakin";
    };
    expect(setUsername).toThrow();
    expect(user.username).toBe("Luke");
  });
});

// test method password
describe("User password", () => {
  const user = new User("Luke Skywalker", "jedi", 20, false);

  test("password can be set", () => {
    user.password = "theForce";
    expect(user.password).toBe("theForce");
  });

  test("password must be at least 6 characters long", () => {
    user.password = "short";
    expect(user.password).toBe("theForce");
  });
});

// test method age - the first test case uses toBe to verify that the age property of the user object has the expected value of 50.
//The second test case sets the age property to a negative value and uses toBe to verify that the age property has not changed.
describe("User age", () => {
  const user = new User("Mace Windu", "jedi", 50, true);
  test("has correct age", () => {
    expect(user.age).toBe(50);
  });
  test("cannot be set to a negative value", () => {
    user.age = -30;
    expect(user.age).toBe(50);
  });
});

// test method login
describe("User.login", () => {
  const user = new User("Anakin Skywalker", "padawan", 25, false);
  test("logs in the user", () => {
    user.login();
    expect(user.loggedIn).toBe(true);
  });
});

// test method logged out
describe("User.logout", () => {
  const user = new User("Yoda", "jediMaster", 900, true);
  test("logs out the user", () => {
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});
