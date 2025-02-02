export function addMovie(movie) {
    return fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка добавления фильма');
      }
      return response.json();
    });
  }