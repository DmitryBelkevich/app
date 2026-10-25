import CssLoader from '../../loaders/CssLoader.js';

export default class Tabs {
  #container;

  text;
  score;
  playback;

  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/tabs.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "tabs";

    // 1. Tab 1
    this.text = document.createElement("button");
    this.text.id = "tab_text";
    this.text.classList.add("tab");
    this.text.textContent = "📝 Text & Chords";
    
    // 2. Tab 2
    this.score = document.createElement("button");
    this.score.id = "tab_score";
    this.score.classList.add("tab");
    this.score.textContent = "🎵 Scores";
    
    // 3. Tab 3
    this.playback = document.createElement("button");
    this.playback.id = "tab_playback";
    this.playback.classList.add("tab");
    this.playback.textContent = "🎧 Playbacks";

    // fill container
    this.#container.append(
      this.text,
      this.score,
      this.playback,
    );
  }

  get container() {
    return this.#container;
  }

  // 1. Tab 1
  
  bindText(handler) {
    this.text.addEventListener("click", () => {
      handler();
    });
  }

  // 2. Tab 2

  bindScore(handler) {
    this.score.addEventListener("click", () => {
      handler();
    });
  }

  // 3. Tab 3

  bindPlayback(handler) {
    this.playback.addEventListener("click", () => {
      handler();
    });
  }
}
