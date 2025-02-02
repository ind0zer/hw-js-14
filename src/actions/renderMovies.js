export function renderMovies(movies, tableBody) {
    tableBody.innerHTML = '';
    movies.forEach(movie => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${movie.id}</td>
        <td>${movie.title}</td>
        <td>${movie.genre}</td>
        <td>${movie.director}</td>
        <td>${movie.year}</td>
        <td>
          <button class="updateBtn" data-id="${movie.id}">Оновити (PUT)</button>
          <button class="editBtn" data-id="${movie.id}">Редагувати (PATCH)</button>
          <button class="deleteBtn" data-id="${movie.id}">Видалити (DELETE)</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }