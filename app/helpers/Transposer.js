export default class Transposer {
  #key;
  #chords = [];

  constructor() {
    const lines = document.querySelectorAll('div.chords');
    
    lines.forEach(line => {
    const line_arr = line.querySelectorAll('div');
      this.#chords.push(...line_arr);
    });
  }
  
  set key(key) {
    this.#key = key;
  }
  
  transposeUp() {
    // transpose key
    this.#key = this.upChord(this.#key);

    // transpose key on display
    const key_e = document.getElementById("key");
    key_e.textContent = this.#key;

    // transpose all chords
    this.#chords.forEach((element) => {
      const chord = element.textContent;
      element.textContent = this.upChord(chord)
    });
  }

  transposeDown() {
    // transpose key
    this.#key = this.downChord(this.#key);

    // transpose key on display
    const key_e = document.getElementById("key");
    key_e.textContent = this.#key;

    // transpose all chords
    this.#chords.forEach((element) => {
      const chord = element.textContent;
      element.textContent = this.downChord(chord);
    });
  }

  upChord(chord) {
    var note;
    var post;
    
    if (chord[1] == "#" || chord[1] == "b") {//A#m -> A# m
      note = chord.slice(0, 2);//A#
      post = chord.slice(2);   // m
    } else if (chord[1] != "#" && chord[1] != "b") {//Am
      note = chord.slice(0, 1);//A
      post = chord.slice(1);   //m
    }
    
    if (note == "A")
      note = "A#";
    else if (note == "B")
      note = "C";
    else if (note == "C")
      note = "C#";
    else if (note == "D")
      note = "D#";
    else if (note == "E")
      note = "F";
    else if (note == "F")
      note = "F#";
    else if (note == "G")
      note = "G#";
      
    else if (note == "A#")
      note = "B";
    else if (note == "C#")
      note = "D";
    else if (note == "D#")
      note = "E";
    else if (note == "F#")
      note = "G";
    else if (note == "G#")
      note = "A";

    else if (note == "Bb")
      note = "B";
    else if (note == "Db")
      note = "D";
    else if (note == "Eb")
      note = "E";
    else if (note == "Gb")
      note = "G";
    else if (note == "Ab")
      note = "A";

    chord = note + post;
    
    return chord;
  }

  downChord(chord) {
    var note;
    var post;
    
    if (chord[1] == "#" || chord[1] == "b") {//A#m -> A# m
      note = chord.slice(0, 2);//A#
      post = chord.slice(2);   // m
    } else if (chord[1] != "#" && chord[1] != "b") {//Am
      note = chord.slice(0, 1);//A
      post = chord.slice(1);   //m
    }
    
    if (note == "A")
      note = "Ab";
    else if (note == "B")
      note = "Bb";
    else if (note == "C")
      note = "B";
    else if (note == "D")
      note = "Db";
    else if (note == "E")
      note = "Eb";
    else if (note == "F")
      note = "E";
    else if (note == "G")
      note = "Gb";
      
    else if (note == "A#")
      note = "A";
    else if (note == "C#")
      note = "C";
    else if (note == "D#")
      note = "D";
    else if (note == "F#")
      note = "F";
    else if (note == "G#")
      note = "G";

    else if (note == "Bb")
      note = "A";
    else if (note == "Db")
      note = "C";
    else if (note == "Eb")
      note = "D";
    else if (note == "Gb")
      note = "F";
    else if (note == "Ab")
      note = "G";

    chord = note + post;
    
    return chord;
  }
}
