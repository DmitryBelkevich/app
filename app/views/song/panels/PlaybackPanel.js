import CssLoader from '../../loaders/CssLoader.js';

export default class PlaybackPanel {
  #cssLoader = new CssLoader();
  #element;
  
  constructor() {
    // this.#cssLoader.load("./app/views/song/css/playback.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "playback";
    this.#element.classList.add("panel");

    // components
    for (let i = 0; i < 50; i++) {
      const div = document.createElement("div");
      div.textContent = i + " playback_content playback_content";
      this.#element.append(div);
    }
  }

  get element() {
    return this.#element;
  }

  init() {
    document.body.append(this.#element);
  }
}
