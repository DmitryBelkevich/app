import Song from "../../app/models/Song.js";
import SongDao from "../../app/dao/SongDao.js";

export default class SongTest {
  #songDao;
  
  constructor() {
    this.#songDao = new SongDao();
  }
  
  test() {
    const song = await this.#songDao.getById(17);

    console.log(song);
  }
}
