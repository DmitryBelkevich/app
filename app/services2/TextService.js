import HtmlLoader from '../loaders/HtmlLoader.js';

export default class TextService {
  #view;
  #htmlLoader;
  
  #chords = [];
  
  constructor(view) {
    this.#view = view;

    this.#htmlLoader = new HtmlLoader();
  }

  async load(text) {
    const content = await this.#htmlLoader.load(text);
    
    // this.#chords.length = 0;
    // this.#chords.push(...this.#getChords());

    // console.log(this.#chords);
    
    this.#view.setText(content)
  }

  #getChords() {
    const chords = [];
    
    const lines = document.querySelectorAll('div.chords');

    console.log(lines);
    
    lines.forEach(line => {
      const line_arr = line.querySelectorAll('div');
      chords.push(...line_arr);
    });

    return chords;
  }
}
