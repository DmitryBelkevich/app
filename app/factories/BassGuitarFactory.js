import BassGuitar from '../models/instruments/BassGuitar.js';

export default class BassGuitarFactory {
  create(obj) {
    return new BassGuitar();
  }
}
