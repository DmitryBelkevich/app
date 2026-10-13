import UnitTest from "../UnitTest.js";

import Guitar from "../../app/models/instruments/Guitar.js";

import Chord from "../../app/models/Chord.js";
import Note from "../../app/models/Note.js";
import Tuning from "../../app/models/Tuning.js";

export default class GuitarTest {
  constructor() {
    this.test = new UnitTest();
  }

  run() {
    // this.transposition_default_test();
    
    this.set_transposition_without_key_test();
    // this.set_transposition_with_key_test();

    // this.set_tuning_test1();
    // this.set_tuning_test2();

    // this.set_capo_test1();
    // this.set_capo_test2();

    // this.transpose_without_key_test1();
    // this.transpose_test2();
    // this.transpose_test3();
    // this.transpose_test4();
    // this.transpose_test5();

    // this.transpose_test_01();
  }

  transposition_default_test() {
    // title
    console.log("[TEST] " + "transposition_default_test");

    // init
    const guitar = new Guitar();

    // checks
    this.test.check("guitar.transposition", guitar.transposition, 0);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, 0);

    // print object
    console.log(guitar);
  }

  // set_transposition

  set_transposition_without_key_test() {
    // title
    console.log("[TEST] " + "set_transposition_without_key_test");

    // init
    const guitar = new Guitar();

    // method
    guitar.transposition = -2;

    // checks
    // this.test.check("guitar.transposition", guitar.transposition, -2);
    // this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, -2);
    // this.test.check("guitar.capo", guitar.capo, 0);

    // method
    guitar.transposition = 0;

    // checks
    this.test.check("guitar.transposition", guitar.transposition, 0);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, 0);
    this.test.check("guitar.capo", guitar.capo, 0);

    // method
    guitar.transposition = 2;

    // checks
    // this.test.check("guitar.transposition", guitar.transposition, 2);
    // this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, 0);
    // this.test.check("guitar.capo", guitar.capo, 2);

    // print object
    console.log(guitar);
  }

  set_transposition_with_key_test() {
    // title
    console.log("[TEST] " + "set_transposition_with_key_test");

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    // method
    guitar.transposition = -2;

    // checks
    this.test.check("guitar.transposition", guitar.key.value, obj.key);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, -2);

    // print object
    console.log(guitar);
  }

  // set tuning

  set_tuning_test1() {
    // title
    console.log("[TEST] " + "set_tuning test");

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
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, -2);

    // print object
    console.log(guitar);
  }

  set_tuning_test2() {
    // title
    console.log("[TEST] " + "set_tuning test");

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
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, -2);

    // print object
    console.log(guitar);
  }

  // set capo

  set_capo_test1() {
    // title
    console.log("[TEST] " + "set capo test");

    // init
    const guitar = new Guitar();

    // method
    guitar.capo = 2;

    guitar.key = new Chord("Am");

    // checks
    this.test.check("guitar.key.value", guitar.key.value, "Bm");
    this.test.check("guitar.capo", guitar.capo, 2);

    // print object
    console.log(guitar);
  }

  set_capo_test2() {
    // title
    console.log("[TEST] " + "set capo test");

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    // method
    guitar.capo = 2;

    // checks
    this.test.check("guitar.key.value", guitar.key.value, "Bm");
    this.test.check("guitar.capo", guitar.capo, 2);

    // print object
    console.log(guitar);
  }

  // transpose

  transpose_without_key_test1() {
    // title
    console.log("[TEST] " + "transpose (without key) test");

    // init
    const guitar = new Guitar();

    // method
    guitar.transpose(-2);

    // checks
    this.test.check("guitar.transposition", guitar.transposition, -2);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, -2);

    // print object
    console.log(guitar);
  }

  // transpose -

  transpose_test2() {
    // title
    console.log("[TEST] " + "transpose (with key) test");

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    // method
    guitar.transpose(-2);

    // checks
    this.test.check("guitar.transposition", guitar.transposition, -2);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, -2);
    this.test.check("guitar.key.value", guitar.key.value, "Gm");

    // print object
    console.log(guitar);
  }

  transpose_test3() {
    // title
    console.log("[TEST] " + "transpose (with key) test");

    // init
    const guitar = new Guitar();

    // method
    guitar.transpose(-2);
    
    guitar.key = new Chord("Am");

    // checks
    this.test.check("guitar.transposition", guitar.transposition, -2);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, -2);
    this.test.check("guitar.key.value", guitar.key.value, "Gm");

    // print object
    console.log(guitar);
  }

  // transpose +

  transpose_test4() {
    // title
    console.log("[TEST] " + "transpose + (with key) test");

    // init
    const guitar = new Guitar();

    guitar.key = new Chord("Am");

    // method
    guitar.transpose(2);

    // checks
    this.test.check("guitar.transposition", guitar.transposition, 2);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, 2);
    this.test.check("guitar.key.value", guitar.key.value, "Bm");

    // print object
    console.log(guitar);
  }

  transpose_test5() {
    // title
    console.log("[TEST] " + "transpose + (with key) test");

    // init
    const guitar = new Guitar();

    // method
    guitar.transpose(2);

    guitar.key = new Chord("Am");

    // checks
    this.test.check("guitar.transposition", guitar.transposition, 2);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, 2);
    this.test.check("guitar.key.value", guitar.key.value, "Bm");

    // print object
    console.log(guitar);
  }

  // *** transpose ***

  transpose_test_01() {
    // title
    console.log("[TEST] " + "transpose test");

    // init
    const guitar = new Guitar();
    guitar.key = new Chord("Am");

    // method
    guitar.transpose(2);

    // checks
    this.test.check("guitar.transposition", guitar.transposition, 2);
    this.test.check("guitar.tuning.transposition", guitar.tuning.transposition, 0);
    this.test.check("guitar.capo", guitar.capo, 2);
    this.test.check("guitar.key.value", guitar.key.value, "Bm");

    // print object
    console.log(guitar);
  }
}
