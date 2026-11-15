import CssLoader from '../../loaders/CssLoader.js';

export default class TextPanel {
  #cssLoader = new CssLoader();
  #element;
  
  constructor() {
    // this.#cssLoader.load("./app/views/song/css/text.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "text";
    this.#element.classList.add("panel");

    // components
    for (let i = 0; i < 50; i++) {
      const div = document.createElement("div");
      div.textContent = "text_content text_content text_content text_content";
      this.#element.append(div);
    }
  }

  init() {
    document.body.append(this.#element);
  }
}
