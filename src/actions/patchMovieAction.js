import { patchMovie } from '../api/patchMovie.js';
import { getMovies } from '../api/getMovies.js';
import { renderMovies } from './renderMovies.js';

export function initPatchMovie() {
  const moviesTableBody = document.querySelector('#moviesTable tbody');
  const editModal = document.getElementById('editModal');
  const editMovieForm = document.getElementById('editMovieForm');
  const closeModalBtn = document.getElementById('closeModal');

  moviesTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('editBtn')) {
      const movieId = e.target.dataset.id;
      const row = e.target.closest('tr');

      editMovieForm.elements['id'].value = movieId;
      editMovieForm.elements['title'].value = row.children[1].textContent;
      editMovieForm.elements['genre'].value = row.children[2].textContent;
      editMovieForm.elements['director'].value = row.children[3].textContent;
      editMovieForm.elements['year'].value = row.children[4].textContent;

      editModal.style.display = 'block';
    }
  });

  editMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(editMovieForm);
    const id = formData.get('id');
    const partialMovie = {
      title: formData.get('title'),
      genre: formData.get('genre'),
      director: formData.get('director'),
      year: Number(formData.get('year'))
    };

    patchMovie(id, partialMovie)
      .then(() => getMovies())
      .then(movies => renderMovies(movies, moviesTableBody))
      .catch(error => console.error(error));

    editModal.style.display = 'none';
  });

  closeModalBtn.addEventListener('click', () => {
    editModal.style.display = 'none';
  });
}