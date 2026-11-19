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
    console.log(id);
  }
}
