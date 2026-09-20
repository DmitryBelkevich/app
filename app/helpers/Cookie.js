export default class Cookie {
  #cookie;
  
  constructor() {
    this.#cookie = document.cookie;
  }

  set index(index) {
    this.#cookie = "index=" + index;
  }

  get index {
    return 0;
  }
}
