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

    // styles
    score.textContent = "Sibelius";
    score.style.padding = "10px 20px";
    score.style.display = "flex";
    score.style.margin = "10px auto";

    score.addEventListener("click", () => {
      if (!!song.score)
        window.open(song.score, "_blank");
    });

    this.#element.append(score);
  }

  get element() {
    return this.#element;
  }

  init() {
    document.body.append(this.#element);
  }
}
