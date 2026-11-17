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
    const display = new Display(song.key).id("key-song");
    // TODO add class original/transposed

    const transposition_display = new Display(song.transposition);

    const down_button = new Button("🔽");
    const up_button = new Button("🔼");

    down_button.click(() => {
      song.transpose(-1);
      
      display.content(song.key);
      display.state = false;
      
      transposition_display.content(song.transposition);
    });

    up_button.click(() => {
      song.transpose(1);
      
      display.content(song.key);
      display.state = true;
      
      transposition_display.content(song.transposition);
    });
    
    this.#components.set("display", display);
    this.#components.set("transposition_display", transposition_display);
    this.#components.set("down_button", down_button);
    this.#components.set("up_button", up_button);
  }

  get components() {
    return this.#components;
  }

  init() {
    for (const component of this.#components.values())
      this._element.append(component.element);
  }
}
