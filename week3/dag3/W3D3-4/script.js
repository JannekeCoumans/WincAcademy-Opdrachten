const movieGenreList = document.querySelector('#movieList');
const setMovieGenres = async () => {
    const data = await getData();
    const movieGenre = data.genres;
    movieGenre.forEach(movieGenre => {
        const li = document.createElement('li');
        const liContent = document.createTextNode(`genre: ${movieGenre.name}, id: ${movieGenre.id}`);
        li.appendChild(liContent);
        movieGenreList.appendChild(li);
    });
}

setMovieGenres();

const setFavoriteMovie = async () => {
    const data = await getFavoriteMovie();
    const favFilm = data.movie_results[0].title;
    const favMovieParagraph = document.getElementById('favMovieParagraph');
    favMovieParagraph.innerHTML = favFilm;
}

setFavoriteMovie();

const topRatedMovieList = document.getElementById('topRatedMovieList');
const setTopRatedMovies = async () => {
    const data = await getTopRatedMovies();
    const topTenRatedMovies = data.results.slice(0, 10);
    topTenRatedMovies.forEach(movie => {
        const li = document.createElement('li');
        const liContent = document.createTextNode(`${movie.title}`);
        li.appendChild(liContent);
        topRatedMovieList.appendChild(li);
    })
}

setTopRatedMovies();