import CssLoader from '../loaders/CssLoader.js';

export default class Song {
  #container;
  
  key;
  transposition;
  transpose_down;
  transpose_up;
  
  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/settings_song.css");
    
    // container
    this.#container = document.createElement("div");
    this.#container.id = "settings-song";

    // 1. key-signature
    this.key = document.createElement("div");
    this.key.id = "key-song";

    // 2. transposition
    this.transposition = document.createElement("div");

    // 3. transpose down
    this.transpose_down = document.createElement("button");
    this.transpose_down.textContent = "🔽";

    // 4. transpose up
    this.transpose_up = document.createElement("button");
    this.transpose_up.textContent = "🔼";

    // fill settings
    this.#container.append(
      this.key,
      this.transposition,
      this.transpose_down,
      this.transpose_up,
    );
  }

  get container() {
    return this.#container;
  }

  // 1. key-signature

  setKey(key, isTransposed) {
    const transpositions = {
      true: "transposed",
      false: "original",
    };
    
    this.key.textContent = key;

    this.key.classList.remove(transpositions[true]);
    this.key.classList.remove(transpositions[false]);
    
    this.key.classList.add(transpositions[isTransposed]);
  }

  // 2. transposition

  setTransposition(count) {
    this.transposition.textContent = count;
  }

  // 3. transpose down

  bindTransposeDown(handler) {
    this.transpose_down.addEventListener("click", () => {
      handler();
    });
  }

  // 4. transpose up

  bindTransposeUp(handler) {
    this.transpose_up.addEventListener("click", () => {
      handler();
    });
  }
}
