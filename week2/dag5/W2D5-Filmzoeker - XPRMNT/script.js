// Hier wordt een functie gemaakt waar je bij elke individuele film een li creeert.

const generateMovieListItem = movie => {

    // dit zijn de elementen die aangemaak dienen te worden
    let li = document.createElement('li');
    let a = document.createElement('a');
    let img = document.createElement('img');

    // hier worden eigenschappen aan de elementen toegevoegd
    li.classList.add('list-item');
    a.href = "https://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;


    // hier worden de elementen aan de parents vastgekoppeld
    li.appendChild(a);
    a.appendChild(img);

    // hier wordt vermeldt wat er uiteindelijk te zien moet zijn.
    return li;
};


// Dit is een functie waarmee de hele lijst met li's gewist wordt, voordat een nieuwe lijst op de pagina verschijnt.


// dit is een functie die de geselecteerde films naar een list-item maakt
const addMoviesToDom = moviesToShow => {
    const list = document.getElementById("movie-list");
    list.innerHTML = "";
    const listItems = moviesToShow.map(generateMovieListItem);

    // welke hij vervolgens per listitem aan een li plakt.
    listItems.forEach(listItem => {
        list.appendChild(listItem);
    });
};

// hier wordt eerst bepaald wanneer de latest movies gelden.
const minimumYear = 2014;

// vervolgens wordt een const aangemaakt die de latest movies gaat store'n
const getLatestMovies = movies => {
    // const filteredMovies wordt aangemaakt, en gefilterd op jaartal
    const filteredMovies = movies.filter(movie => {
        return movie.Year >= minimumYear;
    });
    return filteredMovies;
};

// hier wordt een functie aangemaakt waarin er gekeken wordt of titels aan voorwaarden voldoen.
// er zijn twee parameters aangemaakt die de functie moet returnen.
const getMoviesFilteredByTitle = (movies, titlePart) => {
    // weer de filteredMovies const. Nu wordt er gefilterd op movietitles
    const filteredMovies = movies.filter(movie => {
        const movieTitle = movie.Title.toLowerCase();
        // als movieTitle "" bevat, return het.
        return movieTitle.includes(titlePart);
    });
    return filteredMovies;
};

// 
const filmFilterChangeHandler = event => {
    const movieType = event.target.value;
    let filteredMovies;

    if (movieType === "latest") {
        filteredMovies = getLatestMovies(movies);
    } else {
        filteredMovies = getMoviesFilteredByTitle(movies, movieType);
    }
    addMoviesToDom(filteredMovies);
};

const addEventListeners = () => {
    const filmFilters = document.getElementsByName("film-filter")
    filmFilters.forEach(filmFilter => {
        filmFilter.addEventListener("change", filmFilterChangeHandler);
    });
};

addMoviesToDom(movies);
addEventListeners();