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
    const element = document.getElementById("text")
    const chords = Array.from(element.querySelectorAll("div.chords div"));
    
    for (const chord of chords)
      console.log(chord);
  }
}
