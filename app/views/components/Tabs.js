import CssLoader from '../../loaders/CssLoader.js';

export default class Tabs {
  #container;

  tab_text;
  tab_score;
  tab_playback;

  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/tabs.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "tabs";

    // 1. Tab 1
    this.tab_text = document.createElement("button");
    this.tab_text.id = "tab_text";
    this.tab_text.classList.add("tab");
    this.tab_text.textContent = "📝 Text & Chords";
    
    // 2. Tab 2
    this.tab_score = document.createElement("button");
    this.tab_score.id = "tab_score";
    this.tab_score.classList.add("tab");
    this.tab_score.textContent = "🎵 Scores";
    
    // 3. Tab 3
    this.tab_playback = document.createElement("button");
    this.tab_playback.id = "tab_playback";
    this.tab_playback.classList.add("tab");
    this.tab_playback.textContent = "🎧 Playbacks";

    // fill container
    this.#container.append(
      this.tab_text,
      this.tab_score,
      this.tab_playback,
    );
  }

  get container() {
    return this.#container;
  }

  // 1. Tab 1
  
  bindTextTab(handler) {
    this.tab_text.addEventListener("click", () => {
      handler();
    });
  }

  // 2. Tab 2

  bindScoreTab(handler) {
    this.tab_score.addEventListener("click", () => {
      handler();
    });
  }

  // 3. Tab 3

  bindPlaybackTab(handler) {
    this.tab_playback.addEventListener("click", () => {
      handler();
    });
  }
}
