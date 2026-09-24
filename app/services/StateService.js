import HtmlLoader from '../loaders/HtmlLoader.js';
import CookieLoader from '../loaders/CookieLoader.js';

import TransposeService from './TransposeService.js';

export default class StateService {
  #song;
  #view;

  #transposeService;
  
  #cookieLoader;
  #current;//state

  constructor(song, view) {
    this.#song = song;
    this.#view = view;
    
    // *** Cookie ***
    this.#cookieLoader = new CookieLoader();

    const default_cookie_obj = { name: "instrument", value: 0 };
    const cookie_obj = this.#cookieLoader.getByName("instrument") || default_cookie_obj;
    this.#cookieLoader.save(cookie_obj);
    
    // *** state ***
    if (this.#song.instruments.length <= cookie_obj.value) {
      this.#current = default_cookie_obj.value;
    } else
      this.#current = cookie_obj.value;

    // *** dropdown ***
    this.#view.selectOption(this.#current);

    // *** Text ***
    this.htmlLoader = new HtmlLoader();

    // *** Transposer ***
    this.#transposeService = new TransposeService(song, view);
  }

  get transposeService() {
    return this.#transposeService;
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    this.#current = current;
    this.#cookieLoader.save({name: "instrument", value: this.#current});
  }

  async load() {
    await this.loadText();
    this.loadTuning();

    this.transposeService.getChords();
    this.transposeService.transpose(this.#song.transposition);
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
