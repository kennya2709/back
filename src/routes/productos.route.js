const express = require('express');
const router = express.Router();
const Condon = require('../models/CondonJuan');

router.post('/', async (req, res) => {
    const newCondon = new Condon({
        marca: req.body.marca,
        cantidad: req.body.cantidad
    });
    const savedCondon = await newCondon.save();
    console.log(savedCondon);
})

router.get('/', (req, res) => {
    res.send("Rutas de ProducStos")
})

module.exports = router;