import Model from "./Model.js";

export default class Song extends Model {
  #band;
  #title;
  #tags = [];
  #genre;
  #raiting;

  #text;
  #score;
  #playback;

  #key;
  #transposition = 0;

  #voices = [];
  #instruments = [];

  #isNew = false;
  #isVisible = true;

  get band() {
    return this.#band;
  }

  set band(band) {
    this.#band = band;
  }

  get tags() {
    return this.#tags;
  }

  set tags(tags) {
    this.#tags = tags;
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
    // this.#instruments.forEach(instrument => instrument.transpose(count));
  }

  get isNew() {
    return this.#isNew;
  }

  set isNew(isNew) {
    this.#isNew = isNew;
  }

  get isVisible() {
    return this.#isVisible;
  }

  set isVisible(isVisible) {
    this.#isVisible = isVisible;
  }

  transpose(count) {
    if (!count)
      return;

    if (this.#key)
      this.#key.transpose(count);

    this.#transposition += count;

    for (const instrument of this.#instruments) {
      instrument.key.transpose(count);// !!!
      instrument.transpose(count);
      instrument.content.transpose(count);
    }
         
    // TODO
    // console.log(this);
    // console.log("transpose Playback" + " (" + count + "): " + this.#key);
  }

  isTransposed() {
    return this.#transposition != 0;
  }
}
