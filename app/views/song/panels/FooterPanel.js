import CssLoader from '../../loaders/CssLoader.js';

export default class FooterPanel {
  #cssLoader = new CssLoader();
  #element;

  constructor() {
    this.#cssLoader.load("./app/views/song/css/footer.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "footer";
    this.#container.textContent = "Copyright © Dmitry Belkevich";
  }

  init() {
    document.body.append(this.#element);
  }
}
