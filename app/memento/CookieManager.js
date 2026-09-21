import CookieSaver from './CookieSaver.js';

export default class CookieManager {
  constructor() {
    this.#cookieSaver = CookieSaver();
  }
  
  load() {
    
  }

  save(obj) {
    this.#cookieSaver.save(obj);
  }
}
