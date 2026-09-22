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
  }

  load() {
    this.#view.selectOption(this.#current);
    
    console.log("state: " + this.#current);

    console.log("select Option");
    console.log("save Cookie");
    console.log("load Text");
    console.log("load Tuning");
    
    // this.saveCookie();
    // this.loadText();
    // this.loadTuning();
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
