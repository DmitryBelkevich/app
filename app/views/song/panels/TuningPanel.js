import Panel from './Panel.js';

export default class TuningPanel extends Panel {
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/settings_song.css");
  }
  
  init() {
    
  }
}
