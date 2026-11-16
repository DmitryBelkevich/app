import Panel from './Panel.js';

export default class ScorePanel extends Panel {
  constructor(song) {
    super();
    // this._cssLoader.load("./app/views/song/css/score.css");
    
    // container
    this._element = document.createElement("div");
    this._element.id = "score";
    this._element.classList.add("panel");

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
    this._element.append(score);
  }

  get element() {
    return this._element;
  }

  set visible(isVisible) {
    const state = {
      true: "block",
      false: "none",
    };

    this._element.style.display = state[isVisible];
  }

  init() {
    document.body.append(this._element);
  }
}
