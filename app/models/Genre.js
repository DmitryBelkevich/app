export default class Genre {
  #id;
  #title;

  get id() {
    return this.#id;
  }
  
  set id(id) {
    this.#id = id;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }
}
