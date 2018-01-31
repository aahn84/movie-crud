const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const controller = require('./controller')
// const uuid = require('uuid/v4')

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


// ROUTES
app.get('/movies', controller.getAllMoviesCtrl)
// app.get('/movies/:id', controller.getMovieByIdCtrl)
// app.post('/movies', controller.createMovieCtrl)
// app.put('/movies/:id', controller.updateMovieCtrl)
// app.delete('/movies/:id', controller.deleteMovieCtrl)


app.use((err, req, res, next) => {
  const status = err.status || 500
  console.log('ERROR!!!', err);
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: `Not found`}})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app
