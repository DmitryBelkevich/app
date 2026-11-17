import Panel from './Panel.js';

import Display from '../components/Display.js';
import Button from '../components/Button.js';

class ButtonsMediator {
  #song;
  #buttons = new Map();
  #displays = new Map();

  set song(song) {
    this.#song = song;
  }

  registerButton(id, button) {
    this.#buttons.set(id, button);

    button.click(() => this.handle(id));
  }

  registerDisplays(id, display) {
    this.#displays.set(id, display);
  }

  handle(id) {
    this.#display1.content(this.#song.key);
    this.#display1.state(this.#song.isTransposed());
    
    this.#display2.content(this.#song.transposition);
  }
}

export default class SettingsSongPanel extends Panel {
  #components = new Map();
  #mediator = new ButtonsMediator();
  
  constructor(song) {
    super();
    this._cssLoader.load("./app/views/song/css/settings_song.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "settings-song";
    this._element.classList.add("panel");

    // components
    const down_button = new Button("🔽");
    down_button.click(() => song.transpose(-1));
    const up_button = new Button("🔼");
    up_button.click(() => song.transpose(1));
    
    this.#components.set("display1", new Display(song.key).id("key-song").state(song.isTransposed()));
    this.#components.set("display2", new Display(song.transposition));
    this.#components.set("down_button", down_button);
    this.#components.set("up_button", up_button);

    // *** Buttons-Mediator ***

    this.#mediator.song = song;

    // register buttons
    this.#mediator.registerButton("down", this.#components.get("down_button"));
    this.#mediator.registerButton("up", this.#components.get("up_button"));

    // register displays
    this.#mediator.registerDisplay("down", this.#components.get("display1"));
    this.#mediator.registerDisplay("down", this.#components.get("display2"));

    this.#mediator.registerDisplay("up", this.#components.get("display1"));
    this.#mediator.registerDisplay("up", this.#components.get("display2"));
  }

  get components() {
    return this.#components;
  }

  init() {
    for (const component of this.#components.values())
      this._element.append(component.element);
  }
}
