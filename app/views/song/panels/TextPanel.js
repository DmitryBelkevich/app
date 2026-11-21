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
    for (let i = 0; i < 100; i++) {
      const div = document.createElement("div");
      div.textContent = i + " text_content text_content text_content";
      this._element.append(div);
    }
  }

  init() {
    document.body.append(this._element);
  }
}
