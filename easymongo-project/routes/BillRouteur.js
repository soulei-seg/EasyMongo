const express = require('express')
const router = express.Router()
const Bill = require('../models/BillModel')

router.get('/bills', function(req, res, next) {
    console.log("bills")
  Bill.getAll().then((results) => {
    res.format({
    json: () => {
      res.send({
        data: results,
      })
    },
  })
}).catch(next)
})

router.get('/bill/:billId', (req, res, next) => {
  console.log("get billId")
  Bill.get(req.params.billId).then((bill) => {
    console.log(bill)
    if (!bill) return next()
    res.format({
      json: () => { res.send({ data: bill }) }
    })
  }).catch(next)

})

// Create one subscriber
router.post('/', (req, res, next) => {
  console.log(req.body)
  if (
    !req.body.client || req.body.client === '' ||
    !req.body.create_date || req.body.create_date === '' ||
    !req.body.status || req.body.status === '' ||
    !req.body.payment_date || req.body.payment_date === '' ||
    !req.body.price || req.body.price === '' ||
    !req.body.products || req.body.products === ''
  ) {
    let err = new Error('Bad Request')
    err.status = 400
    return next(err)
  }

  Bill.insert(req.body).then(() => {
    res.format({
      html: () => { res.redirect('/bills') },
      json: () => { res.status(201).send({message: 'success'}) }
    })
  }).catch(next)
})

// Update one subscriber
router.put('/:billId', (req, res, next) => {
  Bill.update(req.params.billId, req.body).then(() => {
    res.format({
      json: () => { res.status(200).send({ message: 'success' }) }
    })
  }).catch(next)
})

// Delete one subscriber
router.delete('/:billId', (req, res, next) => {
  Bill.remove(req.params.billId).then(() => {
    res.format({
      json: () => { res.status(200).send({ message: 'success' }) }
    })
  }).catch(next)
})

module.exports = router
