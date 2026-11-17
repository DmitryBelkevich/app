export default class ButtonsMediator {
  // #song;
  #buttons = new Map();
  #displays = new Map();

  constructor() {
    console.log(this);
  }

  // set song(song) {
  //   this.#song = song;
  // }

  registerButton(id, button) {
    this.#buttons.set(id, button);

    // button.click(() => this.handle(id));
  }

  registerDisplays(id, display) {
    this.#displays.set(id, display);

    if (!this.#displays.has(id))
      this.#displays.set(id, []);
    
    this.#displays.get(id).push(display);
  }

  handle(id) {
    // this.#display1.content(this.#song.key);
    // this.#display1.state(this.#song.isTransposed());
    
    // this.#display2.content(this.#song.transposition);
  }
}
