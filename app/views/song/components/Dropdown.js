export default class Dropdown {
  #element;
  
  constructor(song) {
    this.#element = document.createElement("div");
  }

  get element() {
    return this.#element;
  }

  init() {
    
  }
}
