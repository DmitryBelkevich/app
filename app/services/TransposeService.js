import Transposer from '../helpers/Transposer.js';

export default class TransposeService {
  #song;
  #view;

  #transposer;
  
  #chords = [];

  constructor(song, view) {
    this.#song = song;
    this.#view = view;

    this.#transposer = new Transposer();

    //

    this.#song.instruments.forEach((instrument) => {
      instrument.transposition += this.#song.transposition;

      instrument.tuning.forEach((note, index) => {
        
        
        for (let i = this.#song.transposition; i < 0; i++) {
          const note = instrument.tuning[index];
          instrument.tuning[index] = this.#transposer.upChord(note);
        }
      });
    });
    console.log(this.#song);
  }

  getChords() {
    this.#chords.length = 0;
    
    const lines = document.querySelectorAll('div.chords');
    
    lines.forEach(line => {
    const line_arr = line.querySelectorAll('div');
      this.#chords.push(...line_arr);
    });
  }

  transpose(count) {
    // view
    this.#chords.forEach((element) => {
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          const chord = element.textContent;
          element.textContent = this.#transposer.upChord(chord);
        }
      } else if (count < 0)
        for (let i = count; i < 0; i++) {
          const chord = element.textContent;
          element.textContent = this.#transposer.downChord(chord);
        }
    });
  }

  transposeUp() {
    // model
    this.#song.key = this.#transposer.upChord(this.#song.key);
    this.#song.transposition++;

    // view
    this.#view.setKeyLocal(this.#song.key);

    this.#chords.forEach((element) => {
      const chord = element.textContent;
      element.textContent = this.#transposer.upChord(chord);
    });
  }

  transposeDown() {
    // model
    this.#song.key = this.#transposer.downChord(this.#song.key);
    this.#song.transposition--;

    // view
    this.#view.setKeyLocal(this.#song.key);

    this.#chords.forEach((element) => {
      const chord = element.textContent;
      element.textContent = this.#transposer.downChord(chord);
    });
  }
}
