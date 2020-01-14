const express = require('express')
const router = express.Router()
const tools = require('../tools/tools')
const path = 'Imports/'

  router.get('/', function(req, res, next) {
    tools.getFilesNames(path)
    .then((result) => {
        tools.ImportData(result)
        console.log(result)
        res.format({
            json: () => {
                res.send({
                data: result,
                })
            }
        })
    }).catch(next)
  })

  module.exports = router  