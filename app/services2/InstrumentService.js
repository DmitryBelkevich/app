export default class InstrumentService {
  #song;
  #view;

  #instrument;
  
  constructor(song, view) {
    this.#song = song;
    this.#view = view;

    // dropdown
    this.#song.instruments.forEach((instrument, index) => {
      this.#view.instrument.addOption(index, instrument.title, instrument.color);
    });

    this.#instrument = this.#song.instruments[0];//this.getCurrentInstrument();

    this.setTransposition();
  }

  setTransposition() {
    this.#view.instrument.setKey(this.#instrument.key.toString());
    this.#view.instrument.setTransposition(this.#instrument.transposition);
  }

  load(index) {
    this.#view.instrument.setOption(index);
    console.log("load instrument");
  }
}
