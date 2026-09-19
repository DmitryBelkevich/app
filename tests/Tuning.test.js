import Tuning from "../app/models/Tuning.js";

export default class TuningTest {
  test() {
    const tuning = new Tuning();
    
    console.log(tuning.isStandard() + " | " + false);
  }
}
