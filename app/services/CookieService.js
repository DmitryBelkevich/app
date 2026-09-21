import CookieSaver from '../memento/CookieSaver.js';

export default class CookieService {
  #cookieSaver;
  #current;//state

  constructor() {
    this.#cookieSaver = new CookieSaver();

    const default_cookie_obj = {name: "current", value: 0};
    
    const cookie_obj = this.#cookieSaver.getByName("current") || default_cookie_obj;
    this.#cookieSaver.save(cookie_obj);

    if (this.song.instruments.length > 1)
      this.#current = cookie_obj.value;
    else
      this.#current = default_cookie_obj.value;
  }

  get current() {
    return this.#current;
  }

  set current(current) {
    this.#current = current;
  }
}
