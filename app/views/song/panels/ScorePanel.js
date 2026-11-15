import CssLoader from '../../loaders/CssLoader.js';

export default class ScorePanel {
  #cssLoader = new CssLoader();
  #element;

  constructor() {
    // this.#cssLoader.load("./app/views/song/css/score.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "score";
    this.#element.classList.add("panel");

    // components
    for (let i = 0; i < 100; i++) {
      const div = document.createElement("div");
      div.textContent = i + " " + "score content";
      this.#element.append(div);
    }
  }

  init() {
    document.body.append(this.#element);
  }
}
