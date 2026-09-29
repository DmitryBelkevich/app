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
    var chars = chord.split("");//['.', 'A', '#', '#', 'm']

    console.log(chars);

    var index = 0;
    for(const char of chars) {
      if (!notes.includes(char)) {
        this.#prefix = this.#prefix.concat(char);
        index++;
      } else
        break;
    };

    chars = chars.slice(index);

    console.log(this.#prefix);
    console.log(chars);

    // note
    // chars.forEach((char) => {//['A', '#', '#', 'm']
    //   if (notes.includes(char)) {
    //     this.note.concat(char);
    //     chars = chars.slice(1);
    //   } else
    //     return;
    // });

    this.#note = new Note("");

    // console.log(chars);

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
