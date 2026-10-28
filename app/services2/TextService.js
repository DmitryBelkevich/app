import HtmlLoader from '../loaders/HtmlLoader.js';

export default class TextService {
  #view;
  #htmlLoader;
  #chordsService;
  
  constructor(view) {
    this.#view = view;

    this.#htmlLoader = new HtmlLoader();
    this.#chordsService = new ChordsService();
  }

  async load(text) {
    const content = await this.#htmlLoader.load(text);
    this.#view.setText(content)

    this.#chordsService.getChords();
  }

  transpose(count) {
    this.#chordsService.transpose(count);
  }
}

class ChordsService {
  #chords = [];

  getChords() {
    this.#chords.length = 0;
    
    const lines = document.querySelectorAll('div.chords');
    
    lines.forEach(line => {
      const line_arr = line.querySelectorAll('div');
      this.#chords.push(...line_arr);
    });
  }

  transpose(count) {
    this.#chords.forEach(element => {
      const content = element.textContent;//Am
      
      console.log(content);
    });
  }
}
