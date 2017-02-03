import { observable } from "mobx";


class TimeStore {
  @observable days
  @observable hours
  @observable minutes
  @observable seconds

  constructor() {
    const birth = new Date(1991, 5, 2, 10, 12);

    this.now = 0;
    this.delta = 0;
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;

    setInterval(() => {
      this.now = new Date();
      // get total seconds between the times
      this.delta = Math.abs(this.now - birth) / 1000;
      // calculate (and subtract) whole days
      this.days = Math.floor(this.delta / 86400);
      this.delta -= this.days * 86400;
      // calculate (and subtract) whole hours
      this.hours = Math.floor(this.delta / 3600) % 24;
      this.delta -= this.hours * 3600;
      // calculate (and subtract) whole minutes
      this.minutes = Math.floor(this.delta / 60) % 60;
      this.delta -= this.minutes * 60;
      // what's left is seconds
      this.seconds = Math.floor(this.delta % 60);  // in theory the modulus is not required
    }, 1000);
  }
}

export default new TimeStore()
