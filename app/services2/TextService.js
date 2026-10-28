import HtmlLoader from '../loaders/HtmlLoader.js';

import ChordsService from './ChordsService.js';

export default class TextService {
  #view;
  #instrument;
  
  #htmlLoader;
  #chordsService;
  
  constructor(instrument, view) {
    this.#instrument = instrument;
    this.#view = view;

    this.#htmlLoader = new HtmlLoader();
    this.#chordsService = new ChordsService(this.#view);
  }

  async load(text) {
    const content = await this.#htmlLoader.load(text);
    this.#view.setText(content)

    // this.#chordsService.transpose(this.#instrument.transposition);
  }

  transpose(count) {
    this.#chordsService.transpose(count);
  }
}
