export default class Dropdown {
  #element;
  
  constructor(song) {
    this.#element = document.createElement("select");
  }

  get element() {
    return this.#element;
  }

  id(id) {
    this.#element.id = id;
    return this;
  }

  init() {
    
  }

  change(handler) {
    this.#element.addEventListener("change", (event) => {
      handler(event);
    });
  }
}
