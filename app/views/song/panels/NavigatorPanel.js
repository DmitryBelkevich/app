import Panel from './Panel.js';

import Button from '../components/Button.js';

export default class NavigatorPanel extends Panel {
  #components = new Map();
  
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/nav.css");
    
    // container
    this._element = document.createElement("nav");
    this._element.classList.add("panel");
    
    this.#components.set("list_button", new Button("◀️"));
    this.#components.set("autoscroll_button", new Button("⏬").id("autoscroll"));
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
