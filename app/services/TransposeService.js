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
    // model
    this.#song.key = this.#transposer.upChord(this.#song.key);
    this.#song.transposition++;

    // view
    this.#view.setKey(this.#song.key);

    this.#chords.forEach((element) => {
      const chord = element.textContent;
      element.textContent = this.#transposer.upChord(chord)
    });
  }

  transposeUp() {
    // model
    this.#song.key = this.#transposer.upChord(this.#song.key);
    this.#song.transposition++;

    // view
    this.#view.setKey(this.#song.key);

    this.#chords.forEach((element) => {
      const chord = element.textContent;
      element.textContent = this.#transposer.upChord(chord)
    });
  }

  transposeDown() {
    // model
    this.#song.key = this.#transposer.downChord(this.#song.key);
    this.#song.transposition--;

    // view
    this.#view.setKey(this.#song.key);

    this.#chords.forEach((element) => {
      const chord = element.textContent;
      element.textContent = this.#transposer.downChord(chord);
    });
  }
}
