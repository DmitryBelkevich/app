import Guitar from "../../app/models/instruments/Guitar.js";
import Chord from "../../app/models/Chord.js";

export default class GuitarTest {
  constructor() {
    
  }

  run() {
    this.transposition_setter_without_key_test();
    // this.transposition_setter_with_key_test();
  }

  transposition_setter_without_key_test() {
    console.log("transposition_setter_without_key_test");

    const guitar = new Guitar();

    if (guitar.transposition == 0)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    guitar.transposition = -2;

    if (guitar.transposition == -2)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    guitar.transposition = 2;

    if (guitar.transposition == 2)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    // console.log(guitar);
  }

  transposition_setter_with_key_test() {
    console.log("transposition_setter_with_key_test");

    const guitar = new Guitar();

    // guitar.transposition = -2;

    // if (guitar.transposition == -2)
    //   console.log("🟢" + "guitar.transposition");
    // else
    //   console.log("🔴" + "guitar.transposition");

    console.log(guitar);
  }
}
