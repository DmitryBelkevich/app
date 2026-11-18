import Keyboards from '../models/instruments/Keyboards.js';

export default class KeyboardsFactory {
  create(obj) {
    return new Keyboards();
  }
}
