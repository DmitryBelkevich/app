export default class Dropdown {
  #element;
  
  constructor(instruments) {
    this.#element = document.createElement("select");

    for (const [index, instrument] of instruments.entries())
      this.addOption(index, instrument);
  }

  get element() {
    return this.#element;
  }

  id(id) {
    this.#element.id = id;
    return this;
  }

  addOption(index, instrument) {
    const option = document.createElement("option");

    const colors = {
      null: "⚪️",
      undefined: "⚪️",
      
      "grey": "⚪️",
      "red": "🔴",
      "yellow": "🟡",
      "green": "🟢",
    };

    option.value = index;
    option.textContent = colors[color] + " " + instrument.title;
    
    this.#element.append(option);
  }

  init() {
    
  }

  change(handler) {
    this.#element.addEventListener("change", (event) => {
      handler(event);
    });
  }
}
