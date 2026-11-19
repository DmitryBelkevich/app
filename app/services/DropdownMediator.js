export default class DropdownMediator {
  #options = new Map();
  #instruments = new Map();

  registerOption(id, option) {
    this.#options.set(id, option);

    // listeners
  }

  registerInstrument(id, instrument) {
    this.#instruments.set(id, instrument);
  }

  activate(id) {
    for (const [key, option] of this.#options)
      option.selected = option.value == id;

    const instrument = this.#instruments.get(id);
    console.log(instrument);
  }
}
