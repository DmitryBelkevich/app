import Panel from './Panel.js';

export default class PlaybackPanel extends Panel {
  constructor(song) {
    super();
    // this._cssLoader.load("./app/views/song/css/playback.css");
    
    // container
    this._element = document.createElement("div");
    this._element.id = "playback";
    this._element.classList.add("panel");

    // components
    const playback = document.createElement("button");

    // styles
    playback.textContent = "Playbacks";
    playback.style.padding = "10px 20px";
    playback.style.display = "flex";
    playback.style.margin = "20px auto";

    playback.addEventListener("click", () => {
      if (!!song.playback)
        window.open(song.playback, "_blank");
    });

    // fill
    this._element.append(playback);
  }

  init() {
    document.body.append(this._element);
  }
}
