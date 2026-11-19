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
    
    this.#components.set("display1", new Display("Am").id("key-instrument"));
    // this.#components.set("display1", new Display(song.instruments[0].key).id("key-instrument").state(song.instruments[0].isTransposed()));

    this.#components.set("display2", new Display(0));

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
