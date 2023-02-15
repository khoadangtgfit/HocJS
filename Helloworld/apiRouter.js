const express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.json('router 1 user GET');
})

router.post('/register', (req, res) => {
    console.log(req.body)
    res.json('router 1 user post');
})

router.put('/', (req, res) => {
    res.json('router 1 user PUT');
})

router.delete('/', (req, res) => {
    res.json('router 1 user DELETE');
})


router.get('/:id', (req, res) => {
    res.json('router 1 user' + req.params.id);
})

module.exports = router