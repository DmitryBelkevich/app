import Panel from './Panel.js';

export default class TuningPanel extends Panel {
  #components = new Map();
  
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/tuning.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "tuning";
    this._element.classList.add("panel");

    // components

    // 1. tuning

    // 2. capo
  }

  get components() {
    return this.#components;
  }
  
  init() {
    for (const component of this.#components.values())
      this._element.append(component.element);
  }

  setTuning(tuning) {
    // clear
    this._element.replaceChildren();

    // fill
    for (const note of tuning) {
      const string = document.createElement("div");
      string.textContent = note;

      string.classList.add("string");
      
      this._element.append(string);
    }
  }

  setCapo(capo) {
    console.log(capo);
  }
}
