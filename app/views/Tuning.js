import CssLoader from '../loaders/CssLoader.js';

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
    const div = document.createElement("div");

    const standards = {
      true: "standard",
      false: "non-standard",
    }

    div.classList.add("string");
    div.classList.add(standards[isStandard]);

    div.textContent = note;

    this.#container.append(div);
  }

  // 2. capo

  addCapo(capo) {
    const div = document.createElement("div");
    div.classList.add("capo");
    div.textContent = "Capo: +" + capo;

    this.#container.append(div);
  }
}
