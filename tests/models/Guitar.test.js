import Guitar from "../../app/models/instruments/Guitar.js";

import Chord from "../../app/models/Chord.js";
import Note from "../../app/models/Note.js";
import Tuning from "../../app/models/Tuning.js";

export default class GuitarTest {
  constructor() {
    
  }

  run() {
    // this.transposition_default_test();
    
    // this.set_transposition_without_key_test();
    // this.set_transposition_with_key_test();

    // this.set_tuning_test1();
    // this.set_tuning_test2();

    this.capo_test1();
  }

  transposition_default_test() {
    console.log("transposition_default_test");

    const guitar = new Guitar();

    if (guitar.transposition == 0)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    if (guitar.tuning.transposition == 0)
      console.log("🟢" + "guitar.tuning.transposition");
    else
      console.log("🔴" + "guitar.tuning.transposition");

    console.log(guitar);
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

      if (guitar.tuning.transposition == value)
        console.log("🟢" + "guitar.tuning.transposition");
      else
        console.log("🔴" + "guitar.tuning.transposition");
    });

    console.log(guitar);
  }

  set_transposition_with_key_test() {
    console.log("set_transposition_with_key_test");

    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    [
      {transposition: 0, key: "Am"},
      {transposition: -2, key: "Gm"},
      {transposition: 2, key: "Bm"},
      {transposition: -2, key: "Gm"},
    ].forEach((obj) => {
      guitar.transposition = obj.transposition;

      if (guitar.key.value == obj.key)
        console.log("🟢" + "guitar.transposition");
      else
        console.log("🔴" + "guitar.transposition");

      if (guitar.tuning.transposition == obj.transposition)
        console.log("🟢" + "guitar.tuning.transposition");
      else
        console.log("🔴" + "guitar.tuning.transposition");
    });

    console.log(guitar);
  }

  // set tuning

  set_tuning_test1() {
    console.log("set_tuning test");

    const guitar = new Guitar();

    guitar.tuning = new Tuning(
      new Note("D"),
      new Note("G"),
      new Note("C"),
      new Note("F"),
      new Note("A"),
      new Note("D"),
    );

    guitar.key = new Chord("Am");

    console.log(guitar);
  }

  set_tuning_test2() {
    console.log("set_tuning test");

    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    guitar.tuning = new Tuning(
      new Note("D"),
      new Note("G"),
      new Note("C"),
      new Note("F"),
      new Note("A"),
      new Note("D"),
    );

    console.log(guitar);
  }

  // capo

  capo_test1() {
    console.log("capo test");

    const guitar = new Guitar();

    // guitar.key = new Chord("Am");

    guitar.capo = 2;

    console.log(guitar);
  }
}
