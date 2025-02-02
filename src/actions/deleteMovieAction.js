import { deleteMovie } from '../api/deleteMovie.js';
import { getMovies } from '../api/getMovies.js';
import { renderMovies } from './renderMovies.js';

export function initDeleteMovie() {
  const moviesTableBody = document.querySelector('#moviesTable tbody');

  moviesTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
      const movieId = e.target.dataset.id;
      if (confirm("Видалити фільм?")) {
        deleteMovie(movieId)
          .then(() => getMovies())
          .then(movies => renderMovies(movies, moviesTableBody))
          .catch(error => console.error(error));
      }
    }
  });
}
