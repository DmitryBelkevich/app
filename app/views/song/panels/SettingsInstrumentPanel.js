import Panel from './Panel.js';

import Dropdown from '../components/Dropdown.js';
import Display from '../components/Display.js';
import Button from '../components/Button.js';

export default class SettingsInstrumentPanel extends Panel {
  #components = new Map();

  constructor(song) {
    super();
    this._cssLoader.load("./app/views/song/css/settings_instrument.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "settings-instrument";
    this._element.classList.add("panel");

    // components
    this.#components.set("dropdown", new Dropdown(song.instruments).id("instruments-menu"));
  }

  get components() {
    return this.#components;
  }

  init() {
    for (const component of this.#components.values())
      this._element.append(component.element);
  }
}
