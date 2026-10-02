import Note from "./Note.js";

export default class Chord {
  #prefix = "";
  #note;
  #postfix = "";

  #value = "";
  
  constructor(value) {
    this.parser(value);
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.parser(value);
  }

  parser(value) {
    const notes = ["A", "B", "C", "D", "E", "F", "G", "#", "b"];
    
    // prefix
    var chars = value.split("");

    var index = 0;
    for (const char of chars) {
      if (!notes.includes(char)) {
        this.#prefix = this.#prefix.concat(char);
        index++;
      } else
        break;
    }

    chars = chars.slice(index);

    // note
    var note = "";
    index = 0;
    for (const char of chars) {
      if (notes.includes(char)) {
        note = note.concat(char);
        index++;
      } else
        break;
    }

    chars = chars.slice(index);

    this.#note = new Note(note);

    // postfix
    this.#postfix = chars.join("");

    // value
    this.#value = this.#prefix + this.#note + this.#postfix;
  }

  valueOf() {
    return this.#value;
  }

  toString() {
    return this.#value;
  }

  transpose(count) {
    this.#note.transpose(count);
    this.#value = this.#prefix + this.#note + this.#postfix;
  }

  up() {
    this.#note.up();
    this.#value = this.#prefix + this.#note + this.#postfix;
  }

  down() {
    this.#note.down();
    this.#value = this.#prefix + this.#note + this.#postfix;
  }
}
