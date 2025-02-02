export function updateMovie(id, movie) {
    return fetch(`http://localhost:3000/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка оновлення');
      }
      return response.json();
    });
  }