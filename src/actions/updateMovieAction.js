import { updateMovie } from '../api/updateMovie.js';
import { getMovies } from '../api/getMovies.js';
import { renderMovies } from './renderMovies.js';

export function initUpdateMovie() {
  const moviesTableBody = document.querySelector('#moviesTable tbody');

  moviesTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('updateBtn')) {
      const movieId = e.target.dataset.id;
      const row = e.target.closest('tr');

      const updatedMovie = {
        title: prompt("Новий Title:", row.children[1].textContent) || row.children[1].textContent,
        genre: prompt("Новий Genre:", row.children[2].textContent) || row.children[2].textContent,
        director: prompt("Новий Director:", row.children[3].textContent) || row.children[3].textContent,
        year: Number(prompt("Новий Year:", row.children[4].textContent)) || Number(row.children[4].textContent)
      };

      updateMovie(movieId, updatedMovie)
        .then(() => getMovies())
        .then(movies => renderMovies(movies, moviesTableBody))
        .catch(error => console.error(error));
    }
  });
}