export default class DropdownMediator {
  #options = new Map();
  #instruments = new Map();

  constructor() {
    console.log(this);
  }

  registerOption(id, option) {
    this.#options.set(id, option);

    // listens
  }

  registerInstrument(id, instrument) {
    this.#instruments.set(id, instrument);
  }

  activate(id) {
    // const option = this.#options.get(id);
    // const instrument = this.#instruments.get(id);
    // console.log(option);
    // console.log(instrument);
    for (const option of this.#options) {
      option.selected = option.value == id
    }
  }
}
