export default class Song {
  #id;
  #band;
  #title;
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
    if (transposition > 11) {
      this.#transposition = -12;
      return;
    }
    
    this.#transposition = transposition;
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
  }
}
