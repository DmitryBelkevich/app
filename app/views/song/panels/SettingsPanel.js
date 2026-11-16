import Panel from './Panel.js';

export default class SettingsPanel export Panel {
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/settings_song.css");

    // container
    this._element = document.createElement("div");
  }

  init() {
    document.body.append(this._element);
  }
}
