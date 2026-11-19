export default class DropdownMediator {
  #options = new Map();
  #instruments = new Map();

  registerOption(id, option) {
    this.#options.set(id, option);

    // listeners (optional)
  }

  registerInstrument(id, instrument) {
    this.#instruments.set(id, instrument);
  }

  activate(id) {
    for (const [key, option] of this.#options)
      option.selected = option.value == id;

    for (const [key, instrument] of this.#instruments)
      if (key == id)
        console.log(instrument);
  }
}
