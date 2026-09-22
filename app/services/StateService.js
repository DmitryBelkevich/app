import CookieSaver from '../memento/CookieSaver.js';

export default class StateService {
  #cookieSaver;
  #current;//state

  constructor(song) {
    this.#cookieSaver = new CookieSaver();

    const default_cookie_obj = {name: "current", value: 0};
    
    const cookie_obj = this.#cookieSaver.getByName("current") || default_cookie_obj;
    this.#cookieSaver.save(cookie_obj);

    if (song.instruments.length > 1)
      this.#current = cookie_obj.value;
    else
      this.#current = default_cookie_obj.value;
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    this.#current = current;
    this.saveCookie();
  }

  saveCookie() {
    this.#cookieSaver.save({name: "current", value: this.#current});
  }

  loadText() {
    
  }

  loadTuning() {
    
  }
}
