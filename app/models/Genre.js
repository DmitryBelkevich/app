export default class Genre {
  #title;

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }
}
