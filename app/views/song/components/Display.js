export default class Display {
  #element;
  
  constructor(content) {
    this.#element = document.createElement("div");
    this.#element.textContent = content;
  }
}
