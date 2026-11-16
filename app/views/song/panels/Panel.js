import CssLoader from '../../loaders/CssLoader.js';

export default class Panel {
  _cssLoader;

  constructor() {
    this._cssLoader = new CssLoader();
  }
}
