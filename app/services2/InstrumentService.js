import TuningService from './TuningService.js';
import TextService from './TextService.js';

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
    this.#view.instrument.create(this.#song.instruments);

    // tuning
    this.#tuningService = new TuningService(this.#view.tuning);
    this.#tuningService.loadTuning(this.#instrument.tuning, this.#instrument.capo);

    // transposition
    this.setTransposition();

    // text
    this.#textService = new TextService(this.#view.text);
    this.#textService.load(this.#instrument.chords);
  }

  setTransposition() {
    this.#view.instrument.setKey(this.#instrument.key.toString());
    this.#view.instrument.setTransposition(this.#instrument.transposition);

    this.#tuningService.loadTuning(this.#instrument.tuning, this.#instrument.capo);
  }

  transpose(count) {
    this.#instrument.transpose(count);

    this.setTransposition();

    this.#textService.transpose(count);
  }

  load(index) {
    this.#view.instrument.setOption(index);
    this.#instrument = this.#song.instruments[index];

    this.setTransposition();

    this.#tuningService.loadTuning(this.#instrument.tuning, this.#instrument.capo);
    this.#textService.load(this.#instrument.chords, this.#instrument.transposition);
  }
}
