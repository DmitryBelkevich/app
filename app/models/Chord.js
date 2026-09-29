import Note from "./Note.js";

export default class Chord extends Note {
  #prefix = "";
  #postfix = "";

  #chord = "";
  
  constructor(chord) {
    super("");

    this.parser(chord);
    
    console.log(this);
  }

  parser(chord) {
    chord = "._A##m(sus4)";
    const notes = ["A", "B", "C", "D", "E", "F", "G", "#", "b"];
    
    // prefix
    var chars = chord.split("");//['.', 'A', '#', '#', 'm']

    console.log(chars);
    
    chars.forEach((char) => {
      if (!notes.includes(char)) {
        this.#prefix = this.#prefix.concat(char);
        // chars = chars.slice(1);
      } else
        return;
    });

    console.log(this.#prefix);

    // notes
    // chars.forEach((char) => {//['A', '#', '#', 'm']
    //   if (notes.includes(char)) {
    //     this.note.concat(char);
    //     chars = chars.slice(1);
    //   } else
    //     return;
    // });

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
