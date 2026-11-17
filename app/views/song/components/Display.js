export default class Display {
  #element;
  
  constructor(content) {
    this.#element = document.createElement("div");
    this.#element.textContent = content;
  }

  get element() {
    return this.#element;
  }

  id(id) {
    this.#element.id = id;
    return this;
  }

  content(content) {
    this.#element.textContent = content;
  }
  
  init() {
    
  }
}
