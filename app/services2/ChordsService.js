import Chord from '../models/Chord.js';

export default class ChordsService {
  #view;

  constructor(view) {
    this.#view = view;
  }

  transpose(count) {
    const elements = this.#view.getChords();
    
    elements.forEach(element => {
      const content = element.textContent;
      const chords_arr = content.split(" ");

      chords_arr.forEach(str, index => {
        const chord = new Chord(str);
        chord.transpose(-count);

        chords_arr[index] = chord;
      });

      element.textContent = chords_arr.join(" ");
    });
  }
}
