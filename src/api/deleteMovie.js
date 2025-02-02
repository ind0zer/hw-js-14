export function deleteMovie(id) {
    return fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка видалення фільму');
      }
      return response.json();
    });
  }