import TuningService from './TuningService.js';

export default class InstrumentService {
  #song;
  #view;

  #instrument;

  #tuningService;
  
  constructor(song, view) {
    this.#song = song;
    this.#view = view;

    this.#instrument = this.#song.instruments[0];//this.getCurrentInstrument();

    // dropdown
    this.#song.instruments.forEach((instrument, index) => {
      this.#view.instrument.addOption(index, instrument.title, instrument.color);
    });

    this.#tuningService = new TuningService(this.#instrument, this.#view);

    this.setTransposition();
  }

  setTransposition() {
    this.#view.instrument.setKey(this.#instrument.key.toString());
    this.#view.instrument.setTransposition(this.#instrument.transposition);

    this.#tuningService.instrument = this.#instrument;
    this.#tuningService.loadTuning();
  }

  transpose(count) {
    this.#instrument.transpose(count);

    this.setTransposition();
  }

  load(index) {
    this.#view.instrument.setOption(index);
    this.#instrument = this.#song.instruments[index];

    this.setTransposition();

    this.#tuningService.instrument = this.#instrument;
    this.#tuningService.loadTuning();
  }
}
