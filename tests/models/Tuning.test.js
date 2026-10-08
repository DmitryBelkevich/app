import Tuning from "../app/models/Tuning.js";

export default class TuningTest {
  constructor() {
    
  }
  
  run() {
    this.test();
  }

  test() {
    console.log("tuning test:");
    
    const tuning = new Tuning();

    // if (tuning.isStandard() == 0)
    //   console.log("🟢" + "tuning.isStandard");
    // else
    //   console.log("🔴" + "tuning.isStandard");

    console.log(tuning);
  }
}
