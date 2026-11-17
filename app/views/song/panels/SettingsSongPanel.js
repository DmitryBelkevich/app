import Panel from './Panel.js';

import Display from '../components/Display.js';
import Button from '../components/Button.js';

class Mediator {
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

  registerDisplay(id, display) {
    this.#displays.set(id, display);
  }

  handle(id) {
    if (id == "down_button")
      this.#song.transpose(-1);
    else if (id == "up_button")
      this.#song.transpose(1);

    // TODO
    console.log(this.#song);
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
    const display = new Display(song.key).id("key-song").state(song.isTransposed());
    const transposition_display = new Display(song.transposition);
    const down_button = new Button("🔽");
    const up_button = new Button("🔼");
    
    this.#components.set("display", display);
    this.#components.set("transposition_display", transposition_display);
    this.#components.set("down_button", down_button);
    this.#components.set("up_button", up_button);

    // *** Buttons-Mediator ***

    this.#mediator.song = song;

    // register buttons
    this.#mediator.registerButton("down_button", this.#components.get("down_button"));
    this.#mediator.registerButton("up_button", this.#components.get("up_button"));

    // register displays
    this.#mediator.registerDisplay("display", this.#components.get("display"));
    this.#mediator.registerDisplay("transposition_display", this.#components.get("transposition_display"));

    // default

    // down_button.click(() => {
    //   song.transpose(-1);
      
    //   display.content(song.key);
    //   display.state(song.isTransposed());
      
    //   transposition_display.content(song.transposition);
    // });

    // up_button.click(() => {
    //   song.transpose(1);
      
    //   display.content(song.key);
    //   display.state(song.isTransposed());
      
    //   transposition_display.content(song.transposition);
    // });
  }

  get components() {
    return this.#components;
  }

  init() {
    for (const component of this.#components.values())
      this._element.append(component.element);
  }
}
