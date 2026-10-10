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

    // this.set_capo_test1();
    // this.set_capo_test2();

    // this.transpose_test1();
    // this.transpose_test2();
    // this.transpose_test3();
    this.transpose_test4();
    this.transpose_test5();
  }

  transposition_default_test() {
    // title
    console.log("transposition_default_test");

    // init
    const guitar = new Guitar();

    // checks
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
    // title
    console.log("set_transposition_without_key_test");

    // init
    const guitar = new Guitar();

    [-2, -1, 0, 1, 2].forEach((value) => {
      // method
      guitar.transposition = value;

      // checks
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

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    [
      {transposition: 0, key: "Am"},
      {transposition: -2, key: "Gm"},
      {transposition: 2, key: "Bm"},
      {transposition: -2, key: "Gm"},
    ].forEach((obj) => {
      // method
      guitar.transposition = obj.transposition;

      // checks
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
    // title
    console.log("set_tuning test");

    // init
    const guitar = new Guitar();

    // method
    guitar.tuning = new Tuning(
      new Note("D"),
      new Note("G"),
      new Note("C"),
      new Note("F"),
      new Note("A"),
      new Note("D"),
    );

    guitar.key = new Chord("Am");

    // checks

    console.log(guitar);
  }

  set_tuning_test2() {
    // title
    console.log("set_tuning test");

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    // method
    guitar.tuning = new Tuning(
      new Note("D"),
      new Note("G"),
      new Note("C"),
      new Note("F"),
      new Note("A"),
      new Note("D"),
    );

    // checks

    console.log(guitar);
  }

  // set capo

  set_capo_test1() {
    // title
    console.log("set capo test");

    // init
    const guitar = new Guitar();

    // method
    guitar.capo = 2;

    guitar.key = new Chord("Am");

    // checks
    if (guitar.key.value == "Bm")
      console.log("🟢" + "guitar.capo");
    else
      console.log("🔴" + "guitar.capo");

    // console.log(guitar);
  }

  set_capo_test2() {
    // title
    console.log("set capo test");

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    // method
    guitar.capo = 2;

    // checks
    if (guitar.key.value == "Bm")
      console.log("🟢" + "guitar.capo");
    else
      console.log("🔴" + "guitar.capo");

    // console.log(guitar);
  }

  // transpose

  transpose_test1() {
    // title
    console.log("transpose (without key) test");

    // init
    const guitar = new Guitar();

    // method
    guitar.transpose(-2);

    // checks
    if (guitar.transposition == -2)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    if (guitar.tuning.transposition == -2)
      console.log("🟢" + "guitar.tuning.transposition");
    else
      console.log("🔴" + "guitar.tuning.transposition");

    console.log(guitar);
  }

  // transpose -

  transpose_test2() {
    // title
    console.log("transpose (with key) test");

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    // method
    guitar.transpose(-2);

    // checks
    if (guitar.transposition == -2)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    if (guitar.tuning.transposition == -2)
      console.log("🟢" + "guitar.tuning.transposition");
    else
      console.log("🔴" + "guitar.tuning.transposition");

    if (guitar.key.value == "Gm")
      console.log("🟢" + "guitar.key");
    else
      console.log("🔴" + "guitar.key");

    console.log(guitar);
  }

  transpose_test3() {
    // title
    console.log("transpose (with key) test");

    // init
    const guitar = new Guitar();

    // method
    guitar.transpose(-2);
    
    guitar.key = new Chord("Am");

    // checks
    if (guitar.transposition == -2)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    if (guitar.tuning.transposition == -2)
      console.log("🟢" + "guitar.tuning.transposition");
    else
      console.log("🔴" + "guitar.tuning.transposition");

    if (guitar.key.value == "Gm")
      console.log("🟢" + "guitar.key");
    else
      console.log("🔴" + "guitar.key");

    console.log(guitar);
  }

  // transpose +

  transpose_test4() {
    // title
    console.log("transpose + (with key) test");

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    // method
    guitar.transpose(2);

    // checks
    if (guitar.transposition == 2)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    if (guitar.tuning.transposition == 2)
      console.log("🟢" + "guitar.tuning.transposition");
    else
      console.log("🔴" + "guitar.tuning.transposition");

    if (guitar.key.value == "Bm")
      console.log("🟢" + "guitar.key");
    else
      console.log("🔴" + "guitar.key");

    console.log(guitar);
  }

  transpose_test5() {
    // title
    console.log("transpose + (with key) test");

    // init
    const guitar = new Guitar();

    // method
    guitar.transpose(2);

    guitar.key = new Chord("Am");

    // checks
    if (guitar.transposition == 2)
      console.log("🟢" + "guitar.transposition");
    else
      console.log("🔴" + "guitar.transposition");

    if (guitar.tuning.transposition == 2)
      console.log("🟢" + "guitar.tuning.transposition");
    else
      console.log("🔴" + "guitar.tuning.transposition");

    if (guitar.key.value == "Bm")
      console.log("🟢" + "guitar.key");
    else
      console.log("🔴" + "guitar.key");

    console.log(guitar);
  }
}
