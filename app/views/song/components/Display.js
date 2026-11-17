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

  set state(isTransposed) {
    const state = {
      true: "transposed",
      false: "original",
    };

    this.#element.classList.remove(state[true]);
    this.#element.classList.remove(state[false]);
    
    this.#element.classList.add(state[isTransposed]);
  }
  
  init() {
    
  }
}
