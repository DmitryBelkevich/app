export default class Dropdown {
  #element;
  
  constructor(song) {
    this.#element = document.createElement("select");
  }

  get element() {
    return this.#element;
  }

  init() {
    
  }
}
