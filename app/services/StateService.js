import HtmlLoader from '../loaders/HtmlLoader.js';

import CookieSaver from '../memento/CookieSaver.js';

export default class StateService {
  #cookieSaver;
  #current;//state

  constructor(song) {
    // *** Cookie ***
    this.#cookieSaver = new CookieSaver();

    const default_cookie_obj = {name: "current", value: 0};
    
    const cookie_obj = this.#cookieSaver.getByName("current") || default_cookie_obj;
    this.#cookieSaver.save(cookie_obj);

    if (song.instruments.length > 1)
      this.#current = cookie_obj.value;
    else
      this.#current = default_cookie_obj.value;

    // *** Text ***
    this.htmlLoader = new HtmlLoader();

    // *** Tuning ***
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    this.#current = current;
    this.saveCookie();
    this.loadText();
    this.loadTuning();
  }

  saveCookie() {
    this.#cookieSaver.save({name: "current", value: this.#current});
  }

  async loadText() {
    console.log(this.song.instruments);
    const instrument = this.song.instruments[this.#current];
    const text = await this.htmlLoader.load(instrument.chords);
    this.view.setText(text);
  }

  loadTuning() {
    return;
    
    const tuning = this.song.instruments[0].tuning;
    // const tuning = ["E", "A", "D", "G", "B", "E"];
    
    tuning.forEach((note) => {
      this.view.addString(note, true);
    });
  }
}
