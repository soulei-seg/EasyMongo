const router = require('express').Router()
const User = require('../models/model')

/* Users : liste */
router.get('/', function(req, res, next) {

})

router.get('/all', function(req, res, next) {
  User.getAll().then((results) => {
    res.format({
    html: () => {
      res.render('users/index', {
        users: results[0],
        count: results[1],
        limit: limit,
        offset: offset
      })
    },
    json: () => {
      res.send({
        data: results[0],
        meta: {
          count: results[1]
        }
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
router.post('/', (req, res) => {

})

// Update one subscriber
router.patch('/:id', (req, res) => {

})

// Delete one subscriber
router.delete('/:id', (req, res) => {

})

module.exports = router