import SongService from '../services/SongService.js';
import SongService from '../services/GenreService.js';
import ListView from '../views/ListView.js';

export default class ListController {
  async init() {
    // model
    this.songService = new SongService();
    this.songs = await this.songService.getAll();

    this.genreService = new GenreService();
    this.genres = await this.genreService.getAll();

    console.log(this.genres);
    
    // view
    this.view = new ListView();

    this.songs.forEach((song, index) => {
      this.view.addSong(song);
    });
  }
}
