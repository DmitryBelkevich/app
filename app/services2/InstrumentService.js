export default class InstrumentService {
  #song;
  #view;

  #tuningService;

  #instrument;
  
  constructor(song, view) {
    this.#song = song;
    this.#view = view;

    // dropdown
    this.#song.instruments.forEach((instrument, index) => {
      this.#view.instrument.addOption(index, instrument.title, instrument.color);
    });

    this.#tuningService = new TuningService();

    this.#instrument = this.#song.instruments[0];//this.getCurrentInstrument();

    this.setTransposition();
  }

  setTransposition() {
    this.#view.instrument.setKey(this.#instrument.key.toString());
    this.#view.instrument.setTransposition(this.#instrument.transposition);
  }

  transpose(count) {
    this.#instrument.transpose(count);

    this.setTransposition();
  }

  load(index) {
    this.#view.instrument.setOption(index);
    this.#instrument = this.#song.instruments[index];

    this.setTransposition();
  }
}

class TuningService {
  #song;
  #view;
  
  constructor(song, view) {
    this.#song = song;
    this.#view = view;

    this.loadTuning();
  }

  loadTuning() {
    this.#view.tuning.clear();

    const tuning = this.#instrument.tuning;

    if (!tuning)
      return;

    const isStandard = tuning.isStandard();
    
    tuning.forEach(note => this.#view.tuning.addString(note, isStandard));

    if (this.#instrument.capo)
      this.#view.tuning.addCapo(this.#instrument.capo);
  }
}
