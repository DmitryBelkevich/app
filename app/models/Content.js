export default class Content {
  #value;

  constructor(value) {
    this.#value = value;
  }

  get value() {
    return #value;
  }

  set value(value) {
    this.#value = value;
  }
}
