export default class Instrument {
  #container;
  
  dropdown;
  key;
  transpose_down;
  transpose_up;
  
  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/instrument.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "instrument";

    // 1. dropdown
    this.dropdown = document.createElement("select");

    // 2. key-signature
    this.key = document.createElement("div");
    this.key.id = "key-instrument";

    // 3. transpose down
    this.transpose_down = document.createElement("button");
    this.transpose_down.textContent = "🔽";

    // 4. transpose up
    this.transpose_up = document.createElement("button");
    this.transpose_up.textContent = "🔼";

    // fill container
    this.#container.append(
      this.dropdown,
      this.key, this.transpose_down, this.transpose_up,
    );
  }

  get container() {
    return this.#container;
  }
  
  // 1. dropdown

  addOption(index, title, color) {
    const option = document.createElement("option");

    option.value = index;
    
    const colors = {
      null: "⚪️",
      undefined: "⚪️",
      
      "grey": "⚪️",
      "red": "🔴",
      "yellow": "🟡",
      "green": "🟢",
    };
    
    option.textContent = colors[color] + " " + title;
    
    this.dropdown.append(option);
  }

  setOption(index) {
    this.dropdown.selectedIndex = index;
  }

  getValue() {
    return this.dropdown.value;
  }

  bindDropdown(handler) {
    this.dropdown.addEventListener("change", (event) => {
      handler(event);
    });
  }

  // 2. key-signature

  setKey(key) {
    this.key.textContent = key;
  }

  // 3. transpose down

  bindTransposeDown(handler) {
    this.transpose_down.addEventListener("click", () => {
      handler();
    });
  }

  // 4. transpose up

  bindTransposeUp(handler) {
    this.transpose_up.addEventListener("click", () => {
      handler();
    });
  }
}
