export default class SongComponent {
  #song;
  #element;
  
  constructor(song) {
    this.#song = song;

    // container
    this.#element = document.createElement("div");
    this.#element.classList.add("song");

    // components
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = song.title;

    const band = document.createElement("div");
    band.classList.add("band");
    band.textContent = song.band;

    const tags = document.createElement("div");
    tags.classList.add("tags");
    if (song.tags.length)
      tags.textContent = "tags: " + "[" + song.tags.join("] [") + "]";

    const raiting = document.createElement("div");
    raiting.classList.add("raiting");
    for (let i = 0; i < song.raiting; i++)
      raiting.textContent += "⭐️";

    const isNew = document.createElement("div");
    if (song.isNew)
      isNew.textContent = "🟣 New track";
    isNew.style.padding = "0px 0px 0px 100px"; // styles
    
    this.#element.append(title, band, tags, raiting);
    this.#element.append(isNew);
  }

  get element() {
    return this.#element;
  }

  init() {
    
  }

  click(handler) {
    this.#element.addEventListener("click", () => {
      handler(this.#song.id);
    });
  }
}
