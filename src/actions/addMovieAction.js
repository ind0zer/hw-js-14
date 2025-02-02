import { addMovie } from '../api/addMovie.js';
import { getMovies } from '../api/getMovies.js';
import { renderMovies } from './renderMovies.js';

export function initAddMovie() {
  const addMovieForm = document.getElementById('addMovieForm');
  const moviesTableBody = document.querySelector('#moviesTable tbody');

  addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addMovieForm);
    const newMovie = {
      title: formData.get('title'),
      genre: formData.get('genre'),
      director: formData.get('director'),
      year: Number(formData.get('year'))
    };

    addMovie(newMovie)
      .then(() => getMovies())
      .then(movies => renderMovies(movies, moviesTableBody))
      .catch(error => console.error(error));
  });
}