export default class Note {
  note;
  
  constructor(note) {
    this.note = note;
  }

  get note() {
    return this.note;
  }

  set note(note) {
    this.note = note;
  }

  valueOf() {
    return this.note;
  }

  toString() {
    return this.note;
  }

  transpose(count) {
    if (count > 1) {
      for (let i = 0; i < count; i++)
        this.up();
    } else if (count < 1)
      for (let i = count; i < 0; i++)
        this.down();
    
    return this.note;
  }

  up() {
    if (this.note == "A")
      this.note = "A#";
    else if (this.note == "B")
      this.note = "C";
    else if (this.note == "C")
      this.note = "C#";
    else if (this.note == "D")
      this.note = "D#";
    else if (this.note == "E")
      this.note = "F";
    else if (this.note == "F")
      this.note = "F#";
    else if (this.note == "G")
      this.note = "G#";
      
    else if (this.note == "A#")
      this.note = "B";
    else if (this.note == "C#")
      this.note = "D";
    else if (this.note == "D#")
      this.note = "E";
    else if (this.note == "F#")
      this.note = "G";
    else if (this.note == "G#")
      this.note = "A";

    else if (this.note == "Bb")
      this.note = "B";
    else if (this.note == "Db")
      this.note = "D";
    else if (this.note == "Eb")
      this.note = "E";
    else if (this.note == "Gb")
      this.note = "G";
    else if (this.note == "Ab")
      this.note = "A";

    return this.note;
  }

  down() {
    if (this.note == "A")
      this.note = "Ab";
    else if (this.note == "B")
      this.note = "Bb";
    else if (this.note == "C")
      this.note = "B";
    else if (this.note == "D")
      this.note = "Db";
    else if (this.note == "E")
      this.note = "Eb";
    else if (this.note == "F")
      this.note = "E";
    else if (this.note == "G")
      this.note = "Gb";
      
    else if (this.note == "A#")
      this.note = "A";
    else if (this.note == "C#")
      this.note = "C";
    else if (this.note == "D#")
      this.note = "D";
    else if (this.note == "F#")
      this.note = "F";
    else if (this.note == "G#")
      this.note = "G";

    else if (this.note == "Bb")
      this.note = "A";
    else if (this.note == "Db")
      this.note = "C";
    else if (this.note == "Eb")
      this.note = "D";
    else if (this.note == "Gb")
      this.note = "F";
    else if (this.note == "Ab")
      this.note = "G";

    return this.note;
  }
}
