export default class Cookie {
  #cookie;
  
  constructor() {
    this.#cookie = document.cookie;

    document.cookie = "index=" + 0;
  }

  add() {
    
  }

  get() {
    
  }
}
