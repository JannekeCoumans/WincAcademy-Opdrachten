const favoriteMovie = {
    title: 'How to Lose a Guy in ten Days',
    duration: 90,
    stars: ['Kate Hudson', 'Matthew McConaughey', 'Adam Goldberg']
}

const movieInformation = () => {
    console.log(favoriteMovie.title + " lasts for " + favoriteMovie.duration + " minutes. Stars: " + favoriteMovie.stars + ".")
}

movieInformation();