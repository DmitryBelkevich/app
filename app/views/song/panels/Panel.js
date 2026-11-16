import CssLoader from '../../loaders/CssLoader.js';

export default class Panel {
  _cssLoader;
  _element;

  constructor() {
    this._cssLoader = new CssLoader();
  }

  get element() {
    return this._element;
  }

  set element(element) {
    this._element = element;;
  }
}
