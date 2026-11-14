import CssLoader from '../../loaders/CssLoader.js';

export default class FooterPanel {
  #cssLoader = new CssLoader();
  #element;

  constructor() {
    this.#cssLoader.load("./app/views/song/css/footer.css");

    // container
    this.#element = document.createElement("div");
    this.#element.id = "footer";
    this.#element.textContent = "Copyright © Dmitry Belkevich";
  }

  init() {
    document.body.append(this.#element);
  }
}
