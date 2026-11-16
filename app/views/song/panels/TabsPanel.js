import CssLoader from '../../loaders/CssLoader.js';

import Tab from '../components/Tab.js';

export default class TabsPanel {
  #cssLoader = new CssLoader();
  #element;
  #tabs = new Map();
  
  constructor() {
    this.#cssLoader.load("./app/views/song/css/tabs.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "tabs";
    this.#element.classList.add("panel");

    this.#tabs.set("text", new Tab("📝 Text & Chords").id("tab_text"));
    this.#tabs.set("score", new Tab("🎵 Scores").id("tab_score"));
    this.#tabs.set("playback", new Tab("🎧 Playbacks").id("tab_playback"));
  }

  init() {
    for (const component of this.#tabs.values())
      this.#element.append(component.element);
    
    document.body.append(this.#element);
  }

  get tabs() {
    return this.#tabs;
  }
}
