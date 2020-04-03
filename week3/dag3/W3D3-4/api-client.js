const API_KEY = '669c048f93f9054800d18778e1862bcc';

const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: 'GET' });
        const data = await res.json();
        return data;
    } catch(err){
        console.log(err);
    }
};

const getFavoriteMovie = async () => {
    const apiUrl = `https://api.themoviedb.org/3/find/tt0251127?api_key=${API_KEY}&external_source=imdb_id`;
    try {
        const res = await fetch(apiUrl, { method: 'GET' })
        const data = await res.json()
        console.log('The data in getFavoriteMovie', data)
        return data;
    } catch(err){
        console.log(err)
    }
};

const getTopRatedMovies = async () => {
    const apiUrl = `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    try {
        const res = await fetch(apiUrl, { method: 'GET' })
        const data = await res.json()
        console.log('The data in getTopRatedMovies', data)
        return data;
    } catch(err){
        console.log(err)
    }
};