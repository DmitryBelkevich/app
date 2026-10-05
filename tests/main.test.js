import SongTest from "./models/Song.test.js";

export default function main() {
  const songTest = new SongTest();
  songTest.test();
}

const app = main();
