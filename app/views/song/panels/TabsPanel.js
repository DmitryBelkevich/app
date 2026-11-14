import CssLoader from '../../loaders/CssLoader.js';

import Tab from '../components/Tab.js';

export default class TabsPanel {
  #cssLoader = new CssLoader();
  #element;
  #components = new Map();// tabs
  
  constructor() {
    this.#cssLoader.load("./app/views/song/css/tabs.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "tabs";
    this.#element.classList.add("panel");

    this.#components.set("text", new Tab("📝 Text & Chords").id("tab_text"));
    this.#components.set("score", new Tab("🎵 Scores").id("tab_score"));
    this.#components.set("playback", new Tab("🎧 Playbacks").id("tab_playback"));
  }

  init() {
    for (const component of this.#components.values())
      this.#element.append(component.element);
    
    document.body.append(this.#element);
  }

  get components() {
    return this.#components;
  }
}
