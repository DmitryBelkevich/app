import Guitar from '../models/instruments/Guitar.js';

export default class GuitarFactory {
  create(obj) {
    return new Guitar();
  }
}
