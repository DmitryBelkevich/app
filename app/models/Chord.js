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
        this.#note.concat(char);
        chars = chars.slice(1);
      } else
        return;
    });

    this.#postfix.concat(chars);

    // if (value[1] == "#" || value[1] == "b") {//A#m -> A# m
    //   this.#note = value.slice(0, 2);//A#
    //   this.#postfix = value.slice(2);   // m
    // } else if (value[1] != "#" && value[1] != "b") {//Am
    //   this.#note = value.slice(0, 1);//A
    //   this.#postfix = value.slice(1);   //m
    // }

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
