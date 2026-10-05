export default class Song {
  #id;
  #band;
  #title;
  #genre;
  #raiting;
  #text;
  #score;
  #playback;
  #key;
  #transposition = 0;
  #voices = [];
  #instruments = [];
  
  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get band() {
    return this.#band;
  }

  set band(band) {
    this.#band = band;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get genre() {
    return this.#genre;
  }

  set genre(genre) {
    this.#genre = genre;
  }

  get raiting() {
    return this.#raiting;
  }

  set raiting(raiting) {
    this.#raiting = raiting;
  }

  get text() {
    return this.#text;
  }

  set text(text) {
    this.#text = text;
  }

  get score() {
    return this.#score;
  }

  set score(score) {
    this.#score = score;
  }

  get playback() {
    return this.#playback;
  }

  set playback(playback) {
    this.#playback = playback;
  }

  get key() {
    return this.#key;
  }

  set key(key) {
    this.#key = key;
  }

  get transposition() {
    return this.#transposition;
  }

  set transposition(transposition) {
    this.transpose(transposition - this.#transposition);
  }

  transpose(count) {
    this.#transposition += count;
    this.#key.transpose(count);
    this.#instruments.forEach(instrument => instrument.transpose(count));
  }
  
  get voices() {
    return this.#voices;
  }

  set voices(voices) {
    this.#voices = voices;
  }
  
  get instruments() {
    return this.#instruments;
  }

  set instruments(instruments) {
    this.#instruments = instruments;
    this.#instruments.forEach(instrument => instrument.transpose(count));
  }

  isTransposed() {
    return this.#transposition != 0;
  }

  toString() {
    return this.#key;
      //   + " " + this.#transposition
      //   + " " + this.#instruments
  }
}
