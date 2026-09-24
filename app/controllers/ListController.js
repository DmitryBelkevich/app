import GenreService from '../services/GenreService.js';
import ListView from '../views/ListView.js';

export default class ListController {
  async init() {
    // model
    this.genreService = new GenreService();
    this.genres = await this.genreService.getAll();
    
    // view
    this.view = new ListView();

    this.genres.forEach((genre) => {
      this.view.addGenre(genre.title);

      genre.songs.forEach((song) => {
        this.view.addSong(song.id, song.band, song.title);
      });
    });

    // binds
    this.view.binds.forEach((bind) => {
      bind(this.f);
    });
  }

  f = (id) => {
    console.log(id);
  }
}
