import Chord from '../models/Chord.js';

export default class ChordsService {
  #view;
  #chords;

  constructor(view) {
    this.#view = view;

    this.#chords = this.#view.getChords();
  }

  // getChords() {
  //   this.#chords.length = 0;
    
  //   const lines = document.querySelectorAll('div.chords');
    
  //   lines.forEach(line => {
  //     const line_arr = line.querySelectorAll('div');
  //     this.#chords.push(...line_arr);
  //   });
  // }

  transpose(count) {
    this.#chords.forEach(element => {
      const content = element.textContent;

      const chord = new Chord(content);
      chord.transpose(-count);

      element.textContent = chord;
    });
  }
}
