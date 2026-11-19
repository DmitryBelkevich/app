import CookieService from '../services/CookieService.js';

export default class DropdownMediator {
  #options = new Map();
  #instruments = new Map();
  #cookieService = new CookieService();

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

    this.#cookieService.save(name: "instrument", value: id));
  }

  get current() {
    for (const [key, option] of this.#options)
      if (option.selected)
        return +option.value;

    return null;
  }
}
