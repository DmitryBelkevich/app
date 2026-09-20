export default class Cookie {
  // #cookies = [];
  #current;
  
  constructor() {
    // this.#cookies = document.cookie.split("; ");
  }

  get current() {
    return this.#current;
  }
  
  set current(current) {
    // document.cookie = "index=" + index;
    this.#current = current;
  }
}
