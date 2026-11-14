import CssLoader from '../../loaders/CssLoader.js';

export default class FooterPanel {
  #cssLoader = new CssLoader();

  constructor() {
    this.#cssLoader.load("./app/views/song/css/footer.css");
  }
}
