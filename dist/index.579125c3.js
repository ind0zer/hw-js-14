const apiUrl = 'http://localhost:3000/movies';
function addMovie(title, director) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            director
        })
    }).then((response)=>{
        if (!response.ok) throw new Error('Failed to add movie');
        return response.json();
    }).then((data)=>{
        console.log('Movie added:', data);
        alert('Movie added successfully!');
    }).catch((error)=>console.error('Error:', error));
}
document.getElementById('getMovies').addEventListener('click', function() {
    fetch(apiUrl).then((response)=>response.json()).then((data)=>{
        const tableBody = document.getElementById('moviesTable');
        tableBody.innerHTML = '';
        data.forEach((movie)=>{
            const row = document.createElement('tr');
            row.innerHTML = `
                    <td>${movie.id}</td>
                    <td>${movie.title}</td>
                    <td>${movie.director}</td>
                    <td>
                        <button onclick="updateMovie(${movie.id})">Update</button>
                        <button onclick="editMovie(${movie.id})">Edit</button>
                        <button onclick="deleteMovie(${movie.id})">Delete</button>
                    </td>
                `;
            tableBody.appendChild(row);
        });
    });
});
document.getElementById('addMovie').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            director
        })
    }).then((response)=>response.json()).then(()=>{
        alert('Movie added successfully!');
        document.getElementById('getMovies').click();
    });
});
function updateMovie(id) {
    const newTitle = prompt('Enter new title:');
    const newDirector = prompt('Enter new director:');
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: newTitle,
            director: newDirector
        })
    }).then((response)=>response.json()).then(()=>{
        alert('Movie updated successfully!');
        document.getElementById('getMovies').click();
    });
}
function editMovie(id) {
    const newTitle = prompt('Enter new title:');
    const patchData = {};
    if (newTitle) patchData.title = newTitle;
    fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patchData)
    }).then((response)=>response.json()).then(()=>{
        alert('Movie partially updated successfully!');
        document.getElementById('getMovies').click();
    });
}
function deleteMovie(id) {
    if (confirm('Are you sure you want to delete this movie?')) fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    }).then(()=>{
        alert('Movie deleted successfully!');
        document.getElementById('getMovies').click();
    });
}

//# sourceMappingURL=index.579125c3.js.map
