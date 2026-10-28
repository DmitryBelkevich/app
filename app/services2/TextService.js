import HtmlLoader from '../loaders/HtmlLoader.js';

import ChordsService from './ChordsService.js';

export default class TextService {
  #view;
  
  #htmlLoader;
  #chordsService;
  
  constructor(view) {
    this.#view = view;

    this.#htmlLoader = new HtmlLoader();
    this.#chordsService = new ChordsService(this.#view);
  }

  async load(text, transposition) {
    const content = await this.#htmlLoader.load(text);
    this.#view.setText(content)

    this.#chordsService.transpose(transposition);
  }

  transpose(count) {
    this.#chordsService.transpose(count);
  }
}
