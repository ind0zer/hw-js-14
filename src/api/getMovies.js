export function getMovies() {
    return fetch('http://localhost:3000/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('помилка отримання фільмів');
        }
        return response.json();
      });
  }