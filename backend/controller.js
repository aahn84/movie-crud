const model = require('./model')


// - GET /movies   _lists all movies_
const getAllMoviesCtrl = (req, res, next) => {
  // console.log('Get All!!!')
  // console.log(moviesDb)
  const movies = model.getAllMovies()

  res.status(200).json({data: movies})
}

// - GET /movies/:id  _show a movie_
// const getMovieByIdCtrl = (req, res, next) => {
//   let id = req.params.id
//   return movies.find(movie => movie.id == id);
//
//   // res.json({data: message})
//   res.status(200).json({data: movie})
// }

// - POST /movies  _create a movie_
// const createMovieCtrl = (req, res, next) => {
//   let {title, director, year, my_rating, poster_url} = req.body
//
//   let movie = {
//     id: uuid(),
//     title,
//     director,
//     year,
//     my_rating,
//     poster_url
//   }
//   movies.push(movie)
//
//   res.status(201).json({data: movie})
// }

// - PUT /movies/:id _edit a movie_
// const updateMovieCtrl = (req, res, next) => {
//
//
//   res.status(201).json({data: movie})
// }


// - DELETE /movies/:id _delete a movie_
// const deleteMovieCtrl = (req, res, next) => {
//
//
//   res.status(200).json({data: movie})
// }


module.exports = {
  getAllMoviesCtrl,
  // getMovieByIdCtrl,
  // createMovieCtrl,
  // updateMovieCtrl,
  // deleteMovieCtrl,
}
