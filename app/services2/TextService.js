import HtmlLoader from '../loaders/HtmlLoader.js';

export default class TextService {
  #view;
  #chords = [];
  
  constructor(view) {
    this.#view = view;
  }

  load(text) {
    this.#view.setText(text)
  }
}
