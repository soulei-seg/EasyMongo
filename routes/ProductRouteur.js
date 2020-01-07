const express = require('express')
const router = express.Router()
const Product = require('../models/ProductModel')

router.get('/products', function(req, res, next) {
  Product.getAll().then((results) => {
    res.format({
    json: () => {
      res.send({
        data: results,
      })
    }
  })
}).catch(next)
})

router.get('/product/:productId', (req, res, next) => {
  console.log("get productId")
  Product.get(req.params.productId).then((product) => {
    console.log(product)
    if (!product) return next()
    res.format({
      json: () => { res.send({ data: product }) }
    })
  }).catch(next)

})

// Create one subscriber
router.post('/', (req, res, next) => {
  console.log(req.body)
  if (
    !req.body.name || req.body.name === '' ||
    !req.body.stock || req.body.stock === '' ||
    !req.body.image || req.body.image === '' ||
    !req.body.price || req.body.price === '' ||
    !req.body.bill || req.body.bill === '' 
  ) {
    let err = new Error('Bad Request')
    err.status = 400
    return next(err)
  }

  Product.insert(req.body).then(() => {
    res.format({
      html: () => { res.redirect('/products') },
      json: () => { res.status(201).send({message: 'success'}) }
    })
  }).catch(next)
})

// Update one subscriber
router.put('/:productId', (req, res, next) => {
  Product.update(req.params.productId, req.body).then(() => {
    res.format({
      json: () => { res.status(200).send({ message: 'success' }) }
    })
  }).catch(next)
})

// Delete one subscriber
router.delete('/:productId', (req, res, next) => {
  Product.remove(req.params.productId).then(() => {
    res.format({
      json: () => { res.status(200).send({ message: 'success' }) }
    })
  }).catch(next)
})

module.exports = router
