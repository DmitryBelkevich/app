import Panel from './Panel.js';

export default class TextPanel extends Panel {
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/text.css");
    
    // container
    this._element = document.createElement("div");
    this._element.id = "text";
    this._element.classList.add("panel");

    // components
  }

  init() {
    document.body.append(this._element);
  }

  setText(text) {
    this._element.innerHTML = text;
  }
}
