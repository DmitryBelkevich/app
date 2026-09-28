export default class Note {
  #value;
  
  constructor(value) {
    this.#value = value;
  }

  transpose(count) {
    if (count > 1) {
      for (let i = 0; i < count; i++)
        this.up();
    } else if (count < 1)
      for (let i = count; i < 0; i++)
        this.down();
    
    return this.#value;
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

    return this.#value;
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

    return this.#value;
  }
}
