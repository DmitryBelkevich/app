export default class Chord {
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

  valueOf() {
    return this.#value;
  }

  toString() {
    return this.#value;
  }
}
