import CssLoader from '../../loaders/CssLoader.js';

export default class Tuning {
  #container;
  
  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/tuning.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "tuning";

    // 1. tuning
    
    // 2. capo

    // fill container
  }

  get container() {
    return this.#container;
  }

  // 1. tuning

  clear() {
    this.#container.replaceChildren();
  }

  addString(note, isStandard) {
    const element = document.createElement("div");

    const standards = {
      true: "standard",
      false: "non-standard",
    }

    element.classList.add("string");
    element.classList.add(standards[isStandard]);

    element.textContent = note;

    // fill container
    this.#container.append(element);
  }

  // 2. capo

  addCapo(capo) {
    const element = document.createElement("div");
    
    element.classList.add("capo");
    
    element.textContent = "Capo: +" + capo;

    // fill container
    this.#container.append(element);
  }
}
