const express = require('express')
const router = express.Router()
const Client = require('../models/ClientModel')

router.get('/clients', function(req, res, next) {
  Client.getAll().then((results) => {
    res.format({
    json: () => {
      res.send({
        data: results,
      })
    }
  })
}).catch(next)
})

router.get('/client/:clientId', (req, res, next) => {
  console.log("get clientId")
  Client.get(req.params.clientId).then((client) => {
    console.log(client)
    if (!client) return next()
    res.format({
      json: () => { res.send({ data: client }) }
    })
  }).catch(next)

})

// Create one subscriber
router.post('/', (req, res, next) => {
  console.log(req.body)
  if (
    !req.body.firstname || req.body.firstname === '' ||
    !req.body.lastname || req.body.lastname === '' ||
    !req.body.mail || req.body.mail === '' ||
    !req.body.create_date || req.body.create_date === ''
  ) {
    let err = new Error('Bad Request')
    err.status = 400
    return next(err)
  }

  Client.insert(req.body).then(() => {
    res.format({
      html: () => { res.redirect('/clients') },
      json: () => { res.status(201).send({message: 'success'}) }
    })
  }).catch(next)
})

// Update one subscriber
router.put('/:clientId', (req, res, next) => {
  Client.update(req.params.clientId, req.body).then(() => {
    res.format({
      json: () => { res.status(200).send({ message: 'success' }) }
    })
  }).catch(next)
})

// Delete one subscriber
router.delete('/:clientId', (req, res, next) => {
  Client.remove(req.params.clientId).then(() => {
    res.format({
      json: () => { res.status(200).send({ message: 'success' }) }
    })
  }).catch(next)
})

module.exports = router
