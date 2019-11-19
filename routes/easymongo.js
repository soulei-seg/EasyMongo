const express = require('express')
const router = express.Router()

// Get all
router.get('/', (req, res) => {
  res.send('Hello World')
  console.log('Hello World')	
})

// Get one 
router.get('/:id', (req, res) => {
})

// Create one 
router.post('/', (req, res) => {
})

// Update one 
router.patch('/:id', (req, res) => {
})

// Delete one 
router.delete('/:id', (req, res) => {
})

module.exports = router
