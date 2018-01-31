const uuid = require('uuid/v4')

let movies = [
  {
    id: 1,
    title: 'Star Wars: The Force Awakens',
    director: 'J.J. Abrams',
    year: 2015,
    my_rating: 4,
    poster_url: "/img/star_wars_force_awakens.jpg"
  },
  {
    id: 2,
    title: 'Rogue One: A Star Wars Story',
    director: 'Gareth Edwards',
    year: 2016,
    my_rating: 3,
    poster_url: "/img/rogue_one.jpg"
  },
  {
    id: 3,
    title: 'Star Wars: The Last Jedi',
    director: 'Rian Johnson',
    year: 2017,
    my_rating: 4,
    poster_url: "/img/star_wars_last_jedi.jpg"
  },
]

function getAllMovies() {
  return movies;
}

// function getMovieById() {
//   return movie;
// }
//
// function createMovie() {
//   return movie;
// }
//
// function updateMovie() {
//   return movie;
// }
//
// function deleteMovie() {
//   return movie;
// }

module.exports = {
  getAllMovies,
  // getMovieById,
  // createMovie,
  // updateMovie,
  // deleteMovie
}
