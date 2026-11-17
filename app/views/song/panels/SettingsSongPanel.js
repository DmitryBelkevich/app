import Panel from './Panel.js';

export default class SettingsSongPanel extends Panel {
  #panels = new Map();
  
  constructor() {
    super();
    // this._cssLoader.load("./app/views/song/css/000.css");

    // container

    // components
  }

  get panels() {
    return this.#panels;
  }

  init() {
    for (const panel of this.#panels.values())
      this._element.append(panel.element);
    
    document.body.append(this._element);
  }
}
