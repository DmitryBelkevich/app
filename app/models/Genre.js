export default class Genre {
  #id;
  #title;
  #songs = [];

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

  get songs() {
    return this.#songs;
  }

  set songs(songs) {
    this.#songs = songs;
  }
}
