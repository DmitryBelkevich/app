import CssLoader from '../../loaders/CssLoader.js';

export default class Footer {
  #container;

  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/footer.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "footer";
    this.#container.textContent = "Copyright © Dmitry Belkevich";

    // fill container
  }

  get container() {
    return this.#container;
  }
}
