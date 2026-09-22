import HtmlLoader from '../loaders/HtmlLoader.js';

import CookieSaver from '../memento/CookieSaver.js';

export default class StateService {
  #song;
  #cookieSaver;
  #current;//state

  constructor(song, view) {
    this.#song = song;
    this.#view = view;
    
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

    // *** operation ***
    this.current = 0;
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    conseole.log("setter");
    
    this.#current = current;
    this.saveCookie();
    this.loadText();
    this.loadTuning();
    this.view.selectOption(this.stateService.current);
  }

  saveCookie() {
    this.#cookieSaver.save({name: "current", value: this.#current});
  }

  loadText() {
    const instrument = this.song.instruments[this.#current];
    const text = this.htmlLoader.load(instrument.chords);
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
