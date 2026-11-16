import Panel from './Panel.js';

export default class FooterPanel extends Panel {
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/footer.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "footer";
    this._element.textContent = "Copyright © Dmitry Belkevich";
  }

  init() {
    document.body.append(this._element);
  }
}
