export default class TranspositionService {
  #song;
  #view;

  #instrumentService;
  
  constructor(song, view, nstrumentService) {
    this.#song = song;
    this.#view = view;
    this.#instrumentService = instrumentService;

    this.setTransposition();
  }

  setTransposition() {
    this.#view.song.setKey(this.#song.key, this.#song.isTransposed());
    this.#view.song.setTransposition(this.#song.transposition);
    this.#instrumentService.setTransposition();
  }

  transpose(count) {
    this.#song.transpose(count);

    this.setTransposition();
  }
}
