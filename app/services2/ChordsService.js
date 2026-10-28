import Chord from '../models/Chord.js';

export default class ChordsService {
  #view;

  constructor(view) {
    this.#view = view;
  }

  transpose(count) {
    const c = this.#view.getChords()
    
    c.forEach(element => {
      const content = element.textContent;

      const chord = new Chord(content);
      chord.transpose(-count);

      element.textContent = chord;
    });
  }
}
