export default class Content {
  #value;

  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  transpose(count) {
    // TODO
    console.log("transpose content");
  }
}
