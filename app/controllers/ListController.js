import SongService from '../services/SongService.js';
import GenreService from '../services/GenreService.js';
import ListView from '../views/ListView.js';

export default class ListController {
  async init() {
    // model
    this.songService = new SongService();
    this.songs = await this.songService.getAll();

    this.genreService = new GenreService();
    this.genres = await this.genreService.getAll();
    
    // view
    this.view = new ListView();

    this.genres.forEach((genre) => {
      this.view.addGenre(genre.title);
    });

    this.songs.forEach((song) => {
      this.view.addSong(song.id, song.key, song.band, song.title);
    });
  }
}
