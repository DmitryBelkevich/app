import Instrument from "./Instrument.js";
import Tuning from "../Tuning.js";
import Note from "../Note.js";

export default class Guitar extends Instrument {
  _tuning;
  _capo;
  
  constructor() {
    super();
    this.title = "Guitar";
    this.color = "red";
    this._tuning = new Tuning(
      new Note("E"),
      new Note("A"),
      new Note("D"),
      new Note("G"),
      new Note("B"),
      new Note("E"),
    );
    this._capo = 0;
  }

  get tuning() {
    return this._tuning;
  }

  set tuning(tuning) {
    this._tuning = tuning;

    this._transposition = this._tuning.transposition + this._capo;

    if (this._key)
      this._key.transpose(this._transposition);
  }

  get capo() {
    return this._capo;
  }

  set capo(capo) {
    if (capo < 0)
      capo = 0;
    
    this._capo = capo;

    this._transposition = this._tuning.transposition + this._capo;

    if (this._key)
      this._key.transpose(this._transposition);
  }

  transpose(count) {
    if (!count)
      return;

    const tuningCount = this.#tuningOffset(count);
    const capoCount = this.#capoOffset(count);

    this._tuning.transpose(tuningCount);
    this._capo += capoCount;

    this._transposition += count;

    if (this._key)
      this._key.transpose(count);
  }

  #tuningOffset(count) {
    const up = count > 0;
    const down = count < 0;
    
    if (down) {
      if (false) {
        return count;
      }
    }

    if (down) {
      if (false) {
        return 0;
      }
    }
    
    if (up) {
      if (false) {
        return 0;
      }
    }

    if (up) {
      if (false) {
        return 0;
      }
    }
    
    return 0;
  }

  #capoOffset(count) {
    const up = count > 0;
    const down = count < 0;
    
    if (up) {
      if (false) {//находится справа
        return count;
      }
    }

    if (up) {
      if (false) {//находится слева
        return count - (-this._transposition);
      }
    }
    
    if (down) {
      if (false) {//находится справа
        return -count - (-this._transposition);
      }
    }

    if (down) {
      if (false) {//находится слева
        return 0;
      }
    }
    
    return 0;
  }
}
