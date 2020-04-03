const API_KEY = '669c048f93f9054800d18778e1862bcc';

const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: "GET"});
        console.log("The respone from the API in getData function", res);
        const data = await res.json();
        console.log("The data in getData function ", data);
        return data;
    } catch(err){
        console.log(err);
    }
};