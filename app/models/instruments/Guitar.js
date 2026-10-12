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

    // 1

    const tuning = this.tuningOffset(count);
    const capo = this.capoOffset(count);

    console.log("tuning offset: " + tuning);
    console.log("capo offset: " + capo);

    this._tuning.transpose(tuning);
    this._capo += capo;

    // 2

    this._transposition += count;

    if (this._key)
      this._key.transpose(count);
  }

  tuningOffset(count) {
    if (count < 0) {
      if (this._transposition <= 0) {
        return count;
      }
    }

    if (count < 0) {
      if (false) {
        return 0;
      }
    }
    
    if (count > 0) {
      if (false) {
        return 0;
      }
    }

    if (count > 0) {
      if (false) {
        return 0;
      }
    }
    
    return 0;
  }

  capoOffset(count) {
    if (count < 0) {
      if (this._transposition >= 0) {//находится справа
        console.log(1);
        return 0;
      }
    }

    if (count < 0) {
      if (this._transposition < 0) {//находится слева
        console.log(2);
        return count - (-this._transposition);
      }
    }
    
    if (count > 0) {
      if (this._transposition >= 0) {//находится справа
        console.log(3);
        return count;
      }
    }

    if (count > 0) {
      if (this._transposition < 0) {//находится слева
        console.log(this._transposition);
        return count - (-this._transposition);
      }
    }
    
    return 0;
  }
}
