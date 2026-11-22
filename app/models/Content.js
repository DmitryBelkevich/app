export default class Content {
  #value;
  #chords;

  constructor(value) {
    this.#value = value;
    const element = document.getElementById("text")
    this.#chords = Array.from(element.querySelectorAll("div.chords div"));
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  transpose(count) {
    for (const chord of this.#chords)
      console.log(chord);
  }
}
