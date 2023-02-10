class Scooter {
  static nextSerial = 1;

  constructor(station) {
    this.station = station || null;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 0;
    this.isBroken = false;
  }

  checkOut(user) {
    this.user = user;
    this.station = null;
  }

  checkIn(station) {
    this.user = null;
    this.station = station;
  }

  reportBroken() {
    this.isBroken = true;
  }

  repair() {
    this.isBroken = false;
  }

  chargeScooter(amount) {
    this.charge = Math.min(100, this.charge + amount);
  }
}

module.exports = Scooter;
