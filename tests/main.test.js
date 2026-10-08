import InstrumentTest from "./models/Instrument.test.js";
import GuitarTest from "./models/Guitar.test.js";

import TuningTest from "./models/Tuning.test.js";

export default function main() {
  const instrumentTest = new InstrumentTest();
  // instrumentTest.run();
  
  const guitarTest = new GuitarTest();
  // guitarTest.run();

  const tuningTest = new TuningTest();
  tuningTest.run();
}

const app = main();
