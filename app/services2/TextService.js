import HtmlLoader from '../loaders/HtmlLoader.js';

export default class TextService {
  #view;
  #chords = [];
  
  constructor(view) {
    this.#view = view;
  }

  load(text) {
    this.#chords.length = 0;
    this.#chords.push(...this.#getChords());

    console.log(this.#chords);
    
    this.#view.setText(text)
  }

  #getChords() {
    const chords = [];
    
    const lines = document.querySelectorAll('div.chords');
    
    lines.forEach(line => {
      const line_arr = line.querySelectorAll('div');
      chords.push(...line_arr);
    });

    return chords;
  }
}
