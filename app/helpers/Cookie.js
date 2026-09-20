export default class Cookie {
  #cookie;
  
  constructor() {
    this.#cookie = document.cookie;

    this.#cookie = "ste=Hello";
  }

  set index(index) {
    this.#cookie = "index=" + index;
  }

  get index() {
    return 0;
  }
}
