import Note from "./Note.js";

export default class Chord {
  #prefix = "";
  #note;
  #postfix = "";

  #chord = "";
  
  constructor(chord) {
    this.parser(chord);
    
    console.log(this);
  }

  parser(chord) {
    chord = "._A##m(sus4)";
    const notes = ["A", "B", "C", "D", "E", "F", "G", "#", "b"];
    
    // prefix
    var chars = chord.split("");// ['.', '_', 'A', '#', '#', 'm', '(', 's', 'u', 's', '4', ')']

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
    for (const char of chars) {// ['A', '#', '#', 'm', '(', 's', 'u', 's', '4', ')']
      if (notes.includes(char)) {
        note = note.concat(char);
        index++;
      } else
        break;
    }

    chars = chars.slice(index);

    this.#note = new Note(note);

    console.log(chars);
    console.log(this.#note);

    // this.#postfix.concat(chars);

    // this.#chord = this.#prefix + this.note + this.#postfix;
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
