export default class DropdownMediator {
  #options = new Map();
  #instruments = new Map();

  registerOption(id, option) {
    this.#options.set(id, option);

    // listens
  }

  registerInstrument(id, instrument) {
    this.#instruments.set(id, instrument);
  }

  activate(id) {
    // const instrument = this.#instruments.get(id);
    // console.log(instrument);

    // const option = this.#options.get(id);
    // console.log(option);
    
    for (const [key, option] of this.#options) {
      option.selected = option.value == id;
      // console.log(option);
    }
  }
}
