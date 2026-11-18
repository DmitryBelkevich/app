export default class Dropdown {
  #element;
  
  constructor(song) {
    this.#element = document.createElement("select");
    this.#element.id = "instruments-menu";
  }

  get element() {
    return this.#element;
  }

  init() {
    
  }
}
