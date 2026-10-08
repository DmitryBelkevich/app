import Guitar from "../../app/models/instruments/Guitar.js";
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

    // guitar.transposition = -2;

    // if (guitar.transposition == -2)
    //   console.log("🟢" + "guitar.transposition");
    // else
    //   console.log("🔴" + "guitar.transposition");

    console.log(guitar);
  }
}
