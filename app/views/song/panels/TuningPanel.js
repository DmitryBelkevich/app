import Panel from './Panel.js';

export default class TuningPanel extends Panel {
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/settings_song.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "tuning";
    this._element.classList.add("panel");

    // components
  }
  
  init() {
    
  }
}
