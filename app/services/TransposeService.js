export default class TransposeService {
  #chords = [];
  
  constructor() {
    const lines = document.querySelectorAll('div.chords');
    
    lines.forEach(line => {
    const line_arr = line.querySelectorAll('div');
      this.#chords.push(...line_arr);
    });
  }

  print() {
    console.log(this.#chords);
  }
}
