import UnitTest from "../UnitTest.js";

import Song from "../../app/models/Song.js";
import SongDao from "../../app/dao/SongDao.js";

export default class SongTest {
  #songDao;
  
  constructor() {
    this.#songDao = new SongDao();
    this.test = new UnitTest();
  }

  run() {
    console.log("[Song tests]");
    
    this.test();
  }
  
  async test() {
    // title
    console.log("[TEST] " + "song test");

    // init
    const song = await this.#songDao.getById(0);

    // method
    // song.transpose(2);

    // checks
    // this.test.check("song.transposition", song.transposition, 2);

    // print object
    console.log(song)
    song.instruments.forEach(instrument => console.log(instrument));
  }
}
