import Note from "./Note.js";

export default class Chord extends Note {
  #value;
  
  #prefix;
  
  #postfix;

  #chord;
  
  constructor(value) {
    suoer(value);
    // this.#prefix = "";
    this.#value = value;
    // this.#postfix = "";

    if (value[1] == "#" || value[1] == "b") {//A#m -> A# m
      this.#note = value.slice(0, 2);//A#
      this.#postfix = value.slice(2);   // m
    } else if (value[1] != "#" && value[1] != "b") {//Am
      this.#note = value.slice(0, 1);//A
      this.#postfix = value.slice(1);   //m
    }
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
