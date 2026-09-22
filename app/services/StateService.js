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
    // this.#cookieSaver = new CookieSaver();

    // const default_cookie_obj = {name: "current", value: 0};
    
    // const cookie_obj = this.#cookieSaver.getByName("current") || default_cookie_obj;
    // this.#cookieSaver.save(cookie_obj);

    // if (song.instruments.length > 1)
    //   this.current = cookie_obj.value;
    // else
    //   this.current = default_cookie_obj.value;

    // *** Text ***
    this.htmlLoader = new HtmlLoader();

    // *** Tuning ***

    // state
    this.current = 1;
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    this.#current = current;
  }

  load() {
    this.#view.selectOption(this.#current);
    
    console.log("state: " + this.#current);

    console.log("save Cookie");
    
    // this.saveCookie();
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
