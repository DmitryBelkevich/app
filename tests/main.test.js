import InstrumentTest from "./models/Instrument.test.js";
import GuitarTest from "./models/Guitar.test.js";

import TuningTest from "./models/Tuning.test.js";

import SongTest from "./models/Song.test.js";

import ChordTest from "./models/Chord.test.js";

export default function main() {
  const instrumentTest = new InstrumentTest();
  // instrumentTest.run();
  
  const guitarTest = new GuitarTest();
  // guitarTest.run();

  const tuningTest = new TuningTest();
  // tuningTest.run();

  const songTest = new SongTest();
  // songTest.run();

  const chordTest = new ChordTest();
  chordTest.run();
}

const app = main();
