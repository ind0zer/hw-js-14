export function patchMovie(id, partialMovie) {
    return fetch(`http://localhost:3000/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(partialMovie)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка часткового оновлення фільмів');
      }
      return response.json();
    });
  }