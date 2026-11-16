import Panel from './Panel.js';

export default class SettingsPanel extends Panel {
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/settings_song.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "settings-song";
  }

  init() {
    document.body.append(this._element);
  }
}
