import Panel from './Panel.js';

export default class ScorePanel extends Panel {
  #element;

  constructor(song) {
    super();
    // this._cssLoader.load("./app/views/song/css/score.css");
    
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
    score.style.margin = "20px auto";

    score.addEventListener("click", () => {
      if (!!song.score)
        window.open(song.score, "_blank");
    });

    // fill
    this.#element.append(score);
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
