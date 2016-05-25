const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => { res.send('respond in index resource') })

module.exports = router
