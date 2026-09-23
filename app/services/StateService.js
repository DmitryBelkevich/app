import HtmlLoader from '../loaders/HtmlLoader.js';

import CookieSaver from '../memento/CookieSaver.js';

import TransposeService from './TransposeService.js';

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

    const default_cookie_obj = { name: "current", value: 0 };
    const cookie_obj = this.#cookieSaver.getByName("current") || default_cookie_obj;
    this.#cookieSaver.save(cookie_obj);
    
    // *** state ***
    if (this.#song.instruments.length <= cookie_obj.value) {
      this.#current = default_cookie_obj.value;
    } else
      this.#current = cookie_obj.value;

    // *** dropdown ***
    this.#view.selectOption(this.#current);

    // *** Text ***
    this.htmlLoader = new HtmlLoader();
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    this.#current = current;
    this.#cookieSaver.save({name: "current", value: this.#current});
  }

  load() {
    this.loadText();
    this.loadTuning();
  }

  async loadText() {
    const instrument = this.#song.instruments[this.#current];
    const text = await this.htmlLoader.load(instrument.chords);
    this.#view.setText(text);

    const transposeService = new TransposeService();
    transposeService.print();
  }

  loadTuning() {
    this.#view.clearTuning();

    const instrument = this.#song.instruments[this.#current];
    
    const tuning = instrument.tuning;

    if (!tuning)
      return;

    const isStandard = tuning.isStandard();
    
    tuning.forEach((note) => {
      this.#view.addString(note, isStandard);
    });

    if (instrument.capo)
      this.#view.addCapo(instrument.capo);
  }
}
