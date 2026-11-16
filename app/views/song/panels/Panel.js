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

  set visible(isVisible) {
    const state = {
      true: "block",
      false: "none",
    };

    this._element.style.display = state[isVisible];
  }
}
