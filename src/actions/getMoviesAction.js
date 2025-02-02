import { getMovies } from '../api/getMovies.js';
import { renderMovies } from './renderMovies.js';

export function initGetMovies() {
  const getMoviesBtn = document.getElementById('getMoviesBtn');
  const moviesTableBody = document.querySelector('#moviesTable tbody');

  getMoviesBtn.addEventListener('click', () => {
    getMovies()
      .then(movies => renderMovies(movies, moviesTableBody))
      .catch(error => console.error(error));
  });
}