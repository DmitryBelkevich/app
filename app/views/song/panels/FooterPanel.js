import Panel from './Panel.js';

export default class FooterPanel extends Panel {
  #element;

  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/footer.css");

    // container
    this.#element = document.createElement("div");
    this.#element.id = "footer";
    this.#element.textContent = "Copyright © Dmitry Belkevich";
  }

  init() {
    document.body.append(this.#element);
  }
}
