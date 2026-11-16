import CssLoader from '../../loaders/CssLoader.js';

export default class PlaybackPanel {
  #cssLoader = new CssLoader();
  #element;
  
  constructor(song) {
    // this.#cssLoader.load("./app/views/song/css/playback.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "playback";
    this.#element.classList.add("panel");

    // components
    const playback = document.createElement("button");

    // styles
    playback.textContent = "Playbacks";
    playback.style.padding = "10px 20px";
    playback.style.display = "flex";
    playback.style.margin = "20px auto";

    playback.addEventListener("click", () => {
      if (!!song.playback)
        window.open(song.playback, "_blank");
    });

    // fill
    this.#element.append(playback);
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
