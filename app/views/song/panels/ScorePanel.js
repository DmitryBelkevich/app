import CssLoader from '../../loaders/CssLoader.js';

export default class ScorePanel {
  #cssLoader = new CssLoader();
  #element;

  constructor(song) {
    // this.#cssLoader.load("./app/views/song/css/score.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "score";
    this.#element.classList.add("panel");

    // components
    const score = document.createElement("button");
    score.textContent = "Sibelius";
    score.style.padding = "10px";

    this.#element.append(score);
  }

  get element() {
    return this.#element;
  }

  init() {
    document.body.append(this.#element);
  }
}
