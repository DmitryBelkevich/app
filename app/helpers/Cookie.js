export default class Cookie {
  // #cookies = [];
  #index;
  
  constructor() {
    // this.#cookies = document.cookie.split("; ");
  }

  get index() {
    return this.#index;
  }
  
  set index(index) {
    // document.cookie = "index=" + index;
    this.#index = index;
  }
}
