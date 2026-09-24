import GenreDao from '../dao/GenreDao.js';

export default class GenreService {
  constructor() {
    this.genreDao = new GenreDao();
  }
  
  async getAll() {
    const genres = await this.genreDao.getAll();
    
    return genres;
  }
}
