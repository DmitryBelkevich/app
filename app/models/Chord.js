import Note from "./Note.js";

export default class Chord {
  #prefix = "";
  #note;
  #postfix = "";

  #chord = "";
  
  constructor(chord) {
    this.parser(chord);
  }

  parser(chord) {
    const notes = ["A", "B", "C", "D", "E", "F", "G", "#", "b"];
    
    // prefix
    var chars = chord.split("");

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

    // chord
    this.#chord = this.#prefix + this.#note.toString() + this.#postfix;
  }

  transpose(count) {
    return this.#prefix + this.#note.transpose(count) + this.#postfix;
  }

  up() {
    return this.#prefix + this.#note.up() + this.#postfix;
  }

  down() {
    return this.#prefix + this.#note.down() + this.#postfix;
  }
}
