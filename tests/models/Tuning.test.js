import Tuning from "../../app/models/Tuning.js";

export default class TuningTest {
  constructor() {
    
  }
  
  run() {
    this.tuning_transposition_test();
  }

  tuning_transposition_test() {
    console.log("tuning.transposition test:");
    
    const tuning = new Tuning();

    if (tuning.transposition == undefined)
      console.log("🟢" + "tuning.transposition");
    else
      console.log("🔴" + "tuning.transposition");

    // console.log(tuning);
  }
}
