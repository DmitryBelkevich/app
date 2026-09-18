export default class Instrument {
  #title;

  constructor() {
    this.#title = "Instrument";
  }

  set title(title) {
    this.#title = title;
  }

  get title() {
    return title;
  }
}
