import Panel from './Panel.js';

import Display from '../components/Display.js';
import Button from '../components/Button.js';

class Mediator {
  #song;
  #buttons = new Map();

  #display1;
  #display2;

  set song(song) {
    this.#song = song;
  }

  registerButton(id, button) {
    this.#buttons.set(id, button);

    button.click(() => this.handle(id));
  }

  set display1(display1) {
    this.#display1 = display1;
  }

  set display2(display2) {
    this.#display2 = display2;
  }

  handle(id) {
    switch (id) {
      case "down_button":
        this.#song.transpose(-1);
        break;
      case "up_button":
        this.#song.transpose(1);
        break;
    }

    this.#display1.content(this.#song.key);
    this.#display1.state(this.#song.isTransposed());
    
    this.#display2.content(this.#song.transposition);
  }
}

export default class SettingsSongPanel extends Panel {
  #components = new Map();
  #mediator = new Mediator();
  
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

    // *** Buttons-Mediator ***

    this.#mediator.song = song;

    // register buttons
    this.#mediator.registerButton("down_button", this.#components.get("down_button"));
    this.#mediator.registerButton("up_button", this.#components.get("up_button"));

    // set displays
    this.#mediator.display1 = this.#components.get("display1");
    this.#mediator.display2 = this.#components.get("display2");
  }

  get components() {
    return this.#components;
  }

  init() {
    for (const component of this.#components.values())
      this._element.append(component.element);
  }
}
