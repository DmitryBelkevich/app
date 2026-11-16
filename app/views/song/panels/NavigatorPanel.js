import Panel from './Panel.js';

import Button from '../components/Button.js';

export default class NavigatorPanel extends Panel {
  #element;
  #components = new Map();
  
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/nav.css");
    
    // container
    this.#element = document.createElement("nav");
    this.#element.classList.add("panel");
    
    this.#components.set("list_button", new Button("◀️"));
    this.#components.set("autoscroll_button", new Button("⏬").id("autoscroll"));
  }

  get components() {
    return this.#components;
  }

  init() {
    for (const component of this.#components.values())
      this.#element.append(component.element);
    
    document.body.append(this.#element);
  }
}
