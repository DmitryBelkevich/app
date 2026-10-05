import Song from "../app/models/Song.js";

export default class SongTest {
  test() {
    const song = new Song();

    console.log("Song.toString()");
    console.log("must be: " + false);
    console.log(song.toString() + " | " + false);
  }
}
