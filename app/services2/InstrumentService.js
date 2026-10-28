import TuningService from './TuningService.js';

export default class InstrumentService {
  #song;
  #view;

  #instrument;

  #tuningService;
  #textService;
  
  constructor(song, view) {
    this.#song = song;
    this.#view = view;

    this.#instrument = this.#song.instruments[0];//this.getCurrentInstrument();

    // dropdown
    this.#song.instruments.forEach((instrument, index) => {
      this.#view.instrument.addOption(index, instrument.title, instrument.color);
    });

    // tuning
    this.#tuningService = new TuningService(this.#view);
    this.#tuningService.loadTuning(this.#instrument.tuning, this.#instrument.capo);

    // transposition
    this.setTransposition();

    // text
    this.#textService = new TextService();
  }

  setTransposition() {
    this.#view.instrument.setKey(this.#instrument.key.toString());
    this.#view.instrument.setTransposition(this.#instrument.transposition);

    this.#tuningService.loadTuning(this.#instrument.tuning, this.#instrument.capo);
  }

  transpose(count) {
    this.#instrument.transpose(count);

    this.setTransposition();
  }

  load(index) {
    this.#view.instrument.setOption(index);
    this.#instrument = this.#song.instruments[index];

    this.setTransposition();

    this.#tuningService.loadTuning(this.#instrument.tuning, this.#instrument.capo);
  }
}

class TextService {
  #song;
  #view;
  
  constructor(song, view) {
    this.#song = song;
    this.#view = view;
  }
}
