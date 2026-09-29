import Note from "./Note.js";

export default class Chord extends Note {
  #prefix = "";
  #postfix = "";

  #chord = "";
  
  constructor(chord) {
    super("");

    // parser

    const notes = ["A", "B", "C", "D", "E", "F", "G", "#", "b"];
    
    // prefix
    var chars = chord.split("");//['.', 'A', '#', '#', 'm']
    chars.forEach((char) => {
      if (!notes.includes(chars)) {
        this.#prefix.concat(char);
        chars = chars.slice(1);
      } else
        return;
    });

    // notes
    chars.forEach((char) => {//['A', '#', '#', 'm']
      if (notes.includes(chars)) {
        this.note.concat(char);
        chars = chars.slice(1);
      } else
        return;
    });

    this.#postfix.concat(chars);

    this.#chord = this.#prefix + this.note + this.#postfix;

    console.log(this);
  }

  transpose(count) {
    return super.transpose(count) + this.#postfix;
  }

  up() {
    return super.up() + this.#postfix;
  }

  down() {
    return super.down() + this.#postfix;
  }
}
