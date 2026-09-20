export default class Cookie {
  #cookies = [];
  #index;
  
  constructor() {
    this.#cookies = document.cookie.split("; ");
  }
  
  set index(index) {
    document.cookie = "index=" + index;
  }

  get index() {
    return this.#index;
  }
}
