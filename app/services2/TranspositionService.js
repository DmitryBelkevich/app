export default class TranspositionService {
  #song;
  #view;
  
  constructor(song, view) {
    this.#song = song;
    this.#view = view;
  }

  transpose(count) {
    this.#song.transpose(count);

    this.#view.song.setKey(this.#song.key, this.#song.isTransposed());
  }
}
