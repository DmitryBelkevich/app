export default class Dropdown {
  #element;
  
  constructor(instruments) {
    this.#element = document.createElement("select");

    for (const instrument of instruments) {
      console.log(instrument);
    }
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
