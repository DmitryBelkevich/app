import InstrumentTest from "./models/Instrument.test.js";
import GuitarTest from "./models/Guitar.test.js";

export default function main() {
  const instrumentTest = new InstrumentTest();
  instrumentTest.run();
  
  const guitarTest = new GuitarTest();
  guitarTest.run();
}

const app = main();
