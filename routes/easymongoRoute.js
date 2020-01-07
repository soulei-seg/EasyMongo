const express = require('express')
const router = express.Router()

module.exports = router


router.get('/', (req, res) => {
   res.send('Choisir le fichier à importer')
})


router.get('/:id_table', (req, res) => { 
   res.send('Consulter la table créée')
})


router.post('/post', (req, res) => {
   res.send('Créer une nouvelle ligne')
})


router.patch('/:id_table', (req, res) => {
   res.send('Editer une ligne')
})


router.delete('/:id_table', (req, res) => {
   res.send('Supprimer une ligne')
})

module.exports = router
