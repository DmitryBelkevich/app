import Chord from './Chord.js';

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
    const element = document.getElementById("text");
    const divs = Array.from(element.querySelectorAll("div.chords div"));
    
    for (const div of divs) {
      const chord = new Chord(div.textContent);
      chord.transpose(count);
      div.textContent = chord.value;
    }

    this.#value = element.textContent;
  }
}
