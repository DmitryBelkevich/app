import Panel from './Panel.js';

import Tab from '../components/Tab.js';

export default class TabsPanel extends Panel {
  #tabs = new Map();
  
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/tabs.css");
    
    // container
    this._element = document.createElement("div");
    this._element.id = "tabs";
    this._element.classList.add("panel");

    this.#tabs.set("text", new Tab("📝 Text & Chords").id("tab_text"));
    this.#tabs.set("score", new Tab("🎵 Scores").id("tab_score"));
    this.#tabs.set("playback", new Tab("🎧 Playbacks").id("tab_playback"));
  }

  init() {
    for (const component of this.#tabs.values())
      this._element.append(component.element);
    
    document.body.append(this._element);
  }

  get tabs() {
    return this.#tabs;
  }
}
