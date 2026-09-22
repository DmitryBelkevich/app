import HtmlLoader from '../loaders/HtmlLoader.js';

import CookieSaver from '../memento/CookieSaver.js';

export default class StateService {
  #song;
  #view;
  
  #cookieSaver;
  #current;//state

  constructor(song, view) {
    this.#song = song;
    this.#view = view;
    
    // *** Cookie ***
    this.#cookieSaver = new CookieSaver();
    
    const cookie_obj = this.#cookieSaver.getByName("current") || { name: "current", value: 0 };
    this.#cookieSaver.save(cookie_obj);

    // *** state ***
    this.current = cookie_obj.value;

    // *** Text ***
    this.htmlLoader = new HtmlLoader();
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    this.#current = current;
  }

  load() {
    this.#view.selectOption(this.#current);
    
    this.saveCookie();
    this.loadText();
    this.loadTuning();
  }

  saveCookie() {
    this.#cookieSaver.save({name: "current", value: this.#current});
  }

  async loadText() {
    const instrument = this.#song.instruments[this.#current];
    const text = await this.htmlLoader.load(instrument.chords);
    this.#view.setText(text);
  }

  loadTuning() {
    this.#view.clearTuning();

    const instrument = this.#song.instruments[this.#current];
    
    const tuning = instrument.tuning;
    
    tuning.forEach((note) => {
      this.#view.addString(note, true);
    });

    if (instrument.capo)
      this.#view.addCapo(instrument.capo);
  }
}
