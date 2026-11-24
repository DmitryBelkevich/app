import Chord from './Chord.js';

export default class Content {
  #value;
  // _chords;

  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  // get chords() {
  //   return this._chords;
  // }

  // set chords(chords) {
  //   this._chords = chords;
  // }

  transpose(count) {
    const element = document.getElementById("text");
    const divs = Array.from(element.querySelectorAll("div.chords div"));
    
    for (const div of divs) {
      const arr = div.textContent.split(" ");// ['E_', 'Emaj7_']
      
      for (const [str, i] of arr) {
        console.log(str);
      //   const chord = new Chord(str);
      //   chord.transpose(count);
      //   arr[i] = chord.value;
      // }
      // div.textContent = arr.join(" ");
    // }

    this.#value = element.innerHTML;
  }
}
