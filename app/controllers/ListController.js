import GenreService from '../services/GenreService.js';
import ListView from '../views/ListView.js';

export default class ListController {
  async init( ) {
    // model
    this.genreService = new GenreService();
    this.genres = await this.genreService.getAll();
    
    // view
    this.view = new ListView();

    this.genres.forEach((genre) => {
      this.view.addGenre(genre.title);

      genre.songs.forEach((song) => {
        this.view.addSong(song.band, song.title);
      });
    });
  }
}
