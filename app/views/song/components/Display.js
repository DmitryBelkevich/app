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
    return this;
  }

  state(isTransposed) {
    const states = {
      true: "transposed",
      false: "original",
    };

    this.#element.classList.remove(states[true]);
    this.#element.classList.remove(states[false]);
    
    this.#element.classList.add(states[isTransposed]);

    return this;
  }
  
  init() {
    
  }
}
