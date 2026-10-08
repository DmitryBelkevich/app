import Instrument from "../../app/models/instruments/Guitar.js";
import Chord from "../../app/models/Chord.js";

export default class GuitarTest {
  constructor() {
    
  }

  run() {
    this.test();
  }

  test() {
    console.log("test");

    const guitar = new Guitar();

    console.log(guitar);
  }
}
