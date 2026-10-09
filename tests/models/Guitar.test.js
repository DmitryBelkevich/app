import Guitar from "../../app/models/instruments/Guitar.js";
import Chord from "../../app/models/Chord.js";

export default class GuitarTest {
  constructor() {
    
  }

  run() {
    this.transposition_default_test();
    
    // this.set_transposition_without_key_test();
    this.set_transposition_with_key_test();
  }

  transposition_default_test() {
    console.log("transposition_default_test");

    const guitar = new Guitar();

    if (guitar.transposition == 0)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");
  }

  // set_transposition

  set_transposition_without_key_test() {
    console.log("set_transposition_without_key_test");

    const guitar = new Guitar();

    [-2, -1, 0, 1, 2].forEach((value) => {
      guitar.transposition = value;

      if (guitar.transposition == value)
        console.log("🟢" + "guitar.transposition");
      else
        console.log("🔴" + "guitar.transposition");
    });

    // console.log(guitar);
  }

  set_transposition_with_key_test() {
    console.log("set_transposition_with_key_test");

    const guitar = new Guitar();

    [
      {transposition: 0, key: "Am"},
      {transposition: -2, key: "Gm"},
      {transposition: 2, key: "Bm"},
    ].forEach((obj) => {
      guitar.transposition = obj.transposition;

      if (guitar.transposition == obj.key)
        console.log("🟢" + "guitar.transposition");
      else
        console.log("🔴" + "guitar.transposition");
    });

    guitar.key = new Chord("Am");

    console.log(guitar);
  }
}
