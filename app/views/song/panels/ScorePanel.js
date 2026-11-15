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
    
    // for (let i = 0; i < 50; i++) {
    //   const div = document.createElement("div");
    //   div.textContent = i + " score_content score_content score_content";
    //   this.#element.append(div);
    // }

    const score = document.createElement("button");
    score.textContent = song.score;

    this.#element.append(score);
  }

  get element() {
    return this.#element;
  }

  init() {
    document.body.append(this.#element);
  }
}
