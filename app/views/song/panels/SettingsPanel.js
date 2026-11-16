import Panel from './Panel.js';

import Display from '../components/Display.js';

export default class SettingsPanel extends Panel {
  #components = new Map();
  
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/settings_song.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "settings-song";
    this._element.classList.add("panel");

    // components
    const display = new Display("Am").id("key-song");
    // TODO add class original/transposed
    
    this.#components.set("display", display);
  }

  get components() {
    return this.#components;
  }

  init() {
    for (const component of this.#components.values())
      this._element.append(component.element);
    
    document.body.append(this._element);
  }
}
