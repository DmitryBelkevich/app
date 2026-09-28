export default class Chord {
  #prefix;
  #value;
  #postfix;
  
  constructor(value) {
    // this.#prefix = "";
    // this.#value = value;
    // this.#postfix = "";

    if (value[1] == "#" || value[1] == "b") {//A#m -> A# m
      this.#value = value.slice(0, 2);//A#
      this.#postfix = value.slice(2);   // m
    } else if (value[1] != "#" && value[1] != "b") {//Am
      this.#value = value.slice(0, 1);//A
      this.#postfix = value.slice(1);   //m
    }
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  valueOf() {
    return this.#value;
  }

  toString() {
    return this.#value;
  }

  transpose(count) {
    if (count > 1) {
      for (let i = 0; i < count; i++)
        this.up();
    } else if (count < 1)
      for (let i = count; i < 0; i++)
        this.down();
    
    return this.#value + this.#postfix;
  }

  up() {
    if (this.#value == "A")
      this.#value = "A#";
    else if (this.#value == "B")
      this.#value = "C";
    else if (this.#value == "C")
      this.#value = "C#";
    else if (this.#value == "D")
      this.#value = "D#";
    else if (this.#value == "E")
      this.#value = "F";
    else if (this.#value == "F")
      this.#value = "F#";
    else if (this.#value == "G")
      this.#value = "G#";
      
    else if (this.#value == "A#")
      this.#value = "B";
    else if (this.#value == "C#")
      this.#value = "D";
    else if (this.#value == "D#")
      this.#value = "E";
    else if (this.#value == "F#")
      this.#value = "G";
    else if (this.#value == "G#")
      this.#value = "A";

    else if (this.#value == "Bb")
      this.#value = "B";
    else if (this.#value == "Db")
      this.#value = "D";
    else if (this.#value == "Eb")
      this.#value = "E";
    else if (this.#value == "Gb")
      this.#value = "G";
    else if (this.#value == "Ab")
      this.#value = "A";

    return this.#value + this.#postfix;
  }

  down() {
    if (this.#value == "A")
      this.#value = "Ab";
    else if (this.#value == "B")
      this.#value = "Bb";
    else if (this.#value == "C")
      this.#value = "B";
    else if (this.#value == "D")
      this.#value = "Db";
    else if (this.#value == "E")
      this.#value = "Eb";
    else if (this.#value == "F")
      this.#value = "E";
    else if (this.#value == "G")
      this.#value = "Gb";
      
    else if (this.#value == "A#")
      this.#value = "A";
    else if (this.#value == "C#")
      this.#value = "C";
    else if (this.#value == "D#")
      this.#value = "D";
    else if (this.#value == "F#")
      this.#value = "F";
    else if (this.#value == "G#")
      this.#value = "G";

    else if (this.#value == "Bb")
      this.#value = "A";
    else if (this.#value == "Db")
      this.#value = "C";
    else if (this.#value == "Eb")
      this.#value = "D";
    else if (this.#value == "Gb")
      this.#value = "F";
    else if (this.#value == "Ab")
      this.#value = "G";

    return this.#value + this.#postfix;
  }
}
