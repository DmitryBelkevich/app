import CssLoader from '../../loaders/CssLoader.js';

export default class Text {
  #container;

  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/text.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "text";

    // fill container
  }

  get container() {
    return this.#container;
  }
  
  setText(text) {
    this.#container.innerHTML = text;
  }
}
