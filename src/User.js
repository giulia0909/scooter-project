class User {
  constructor(username, password, age, loggedIn) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = loggedIn;
  }
  //_username is a private property used to store value of username
  //getter returns value of _username
  get username() {
    return this._username;
  }
  //setter updates _username
  set username(value) {
    this._username = value;
  }

  get password() {
    return this._password;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw new Error("Age cannot be set to a negative value.");
    }
    this._age = value;
  }

  get loggedIn() {
    return this._loggedIn;
  }

  set loggedIn(value) {
    this._loggedIn = value;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}

module.exports = User;
