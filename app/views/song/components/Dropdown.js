export default class Dropdown {
  #element;
  
  constructor(instruments) {
    this.#element = document.createElement("select");

    for (const [index, instrument] of instruments.entries()) {
      const option = document.createElement("option");
      
      option.textContent = instrument.title;
      
      this.#element.append(option);
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
