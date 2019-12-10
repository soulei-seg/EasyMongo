const router = require('express').Router()
const User = require('../models/model')

/* Users : liste */
router.get('/', function(req, res, next) {

})

router.get('/all', function(req, res, next) {
  User.getAll().then((results) => {
    res.format({
    json: () => {
      res.send({
        data: results,
      })
    }
  })
}).catch(next)
})

// Get one subscriber
router.get('/user/:userId', (req, res, next) => {
  console.log("get userId")
  User.get(req.params.userId).then((user) => {
    console.log(user)
    if (!user) return next()
    res.format({
      json: () => { res.send({ data: user }) }
    })
  }).catch(next)

})

// Create one subscriber
router.post('/', (req, res, next) => {
  console.log(req.body)
  // if (
  //   !req.body.pseudo || req.body.pseudo === '' ||
  //   !req.body.email || req.body.email === '' ||
  //   !req.body.firstname || req.body.firstname === ''
  // ) {
  //   let err = new Error('Bad Request')
  //   err.status = 400
  //   return next(err)
  // }

  User.insert(req.body).then(() => {
    res.format({
      html: () => { res.redirect('/all') },
      json: () => { res.status(201).send({message: 'success'}) }
    })
  }).catch(next)
})

// Update one subscriber
router.patch('/:id', (req, res) => {

})

// Delete one subscriber
router.delete('/:id', (req, res) => {

})

module.exports = router