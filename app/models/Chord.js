import Note from "./Note.js";

export default class Chord {
  #value = "";
  
  #prefix = "";
  #note;
  #postfix = "";

  #bass_prefix = "";
  #bass_note;
  #bass_postfix = "";
  
  constructor(value) {
    this.parser(value);
    this.#value =
      this.#prefix + this.#note + this.#postfix
      // + this.#bass_prefix + this.#bass_note + this.#bass_postfix
      ;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.parser(value);
    this.#value = this.#prefix + this.#note + this.#postfix;
  }

  parser(value) {
    const notes = ["A", "B", "C", "D", "E", "F", "G"];
    const symbols = ["#", "b"];
    
    // prefix
    var chars = value.split("");

    var index = 0;
    for (const char of chars) {
      if (!notes.includes(char) && !symbols.includes(char)) {
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
      if (notes.includes(char) || symbols.includes(char)) {
        note = note.concat(char);
        index++;
      } else
        break;
    }

    chars = chars.slice(index);

    this.#note = new Note(note);

    // postfix
    this.#postfix = chars.join("");

    // *** bass ***
  }

  valueOf() {
    return this.#value;
  }

  toString() {
    return this.#value;
  }

  transpose(count) {
    if (!count)
      return;
    
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

class Parser {
  parse(str) {
    
  }
}
