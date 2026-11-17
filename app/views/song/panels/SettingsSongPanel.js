import Panel from './Panel.js';

import Display from '../components/Display.js';
import Button from '../components/Button.js';

export default class SettingsSongPanel extends Panel {
  #components = new Map();
  
  constructor(song) {
    super();
    this._cssLoader.load("./app/views/song/css/settings_song.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "settings-song";
    this._element.classList.add("panel");

    // components
    this.#components.set("display1", new Display(song.key).id("key-song").state(song.isTransposed()));
    this.#components.set("display2", new Display(song.transposition));
    this.#components.set("down_button", new Button("🔽"));
    this.#components.set("up_button", new Button("🔼"));
  }

  get components() {
    return this.#components;
  }

  init() {
    for (const component of this.#components.values())
      this._element.append(component.element);
  }
}
