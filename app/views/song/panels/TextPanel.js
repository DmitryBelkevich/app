import Panel from './Panel.js';

export default class TextPanel extends Panel {
  #element;
  
  constructor() {
    super();
    // this._cssLoader.load("./app/views/song/css/text.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "text";
    this.#element.classList.add("panel");

    // components
    for (let i = 0; i < 100; i++) {
      const div = document.createElement("div");
      div.textContent = i + " text_content text_content text_content";
      this.#element.append(div);
    }
  }

  get element() {
    return this.#element;
  }

  set visible(isVisible) {
    const state = {
      true: "block",
      false: "none",
    };

    this.#element.style.display = state[isVisible];
  }

  init() {
    document.body.append(this.#element);
  }
}
