export default class TransposeService {
  #chords = [];

  constructor(song, view) {
    this.song = song;
    this.view = view;
  }

  getChords() {
    const lines = document.querySelectorAll('div.chords');
    
    lines.forEach(line => {
    const line_arr = line.querySelectorAll('div');
      this.#chords.push(...line_arr);
    });
    
    console.log(this.#chords);
  }
}
