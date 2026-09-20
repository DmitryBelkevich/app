export default class Cookie {
  #current;
  
  get current() {
    return this.#current;
  }
  
  set current(current) {
    this.#current = current;
  }
}
