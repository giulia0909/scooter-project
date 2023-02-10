const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter integrity checks", () => {
  const scooter = new Scooter("Bristol");
  test("has correct properties", () => {
    // edit this to be a real test!
    expect(scooter).toHaveProperty("user", null);
    expect(scooter).toHaveProperty("serial");
    expect(scooter).toHaveProperty("charge");
    expect(typeof scooter.isBroken).toBe("boolean");
    expect(scooter.station).toBe("Bristol");
  });
});

//Method tests
describe("scooter methods", () => {
  let scooter;
  let user;

  beforeEach(() => {
    scooter = new Scooter("Bristol");
    user = new User();
  });

  it("should allow a scooter to be checked out by a user", () => {
    scooter.checkOut(user);
    expect(scooter.user).toBe(user);
    expect(scooter.station).toBe(null);
  });

  it("should allow a scooter to be checked in to a station", () => {
    scooter.checkOut(user);
    scooter.checkIn("Bristol");
    expect(scooter.user).toBe(null);
    expect(scooter.station).toBe("Bristol");
  });

  it("should allow a scooter to be reported as broken", () => {
    scooter.reportBroken();
    expect(scooter.isBroken).toBe(true);
  });

  it("should allow a scooter to be repaired", () => {
    scooter.reportBroken();
    scooter.repair();
    expect(scooter.isBroken).toBe(false);
  });

  it("should allow a scooter to be charged", () => {
    scooter.chargeScooter(50);
    expect(scooter.charge).toBe(50);
  });

  it("should limit the charge to 100", () => {
    scooter.chargeScooter(150);
    expect(scooter.charge).toBe(100);
  });
});

//describe('scooter methods', () => {
// tests here!

//rent method

//dock method

//requestRepair method

//charge method
//}
