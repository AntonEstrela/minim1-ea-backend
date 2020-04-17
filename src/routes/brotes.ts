import express from 'express';
const router = express.Router();
const Brote = require('../models/Brote');
const app = require('../app');

app

// Get all
router.get('/', async (req, res) => {
    try{
        const brotes = await Brote.find();
        res.json(brotes);
    } catch (err) {
        res.json({race: err});
    }
});

//POST
router.post('/', async (req, res) => {
    const brote = new Brote({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fechainicio: req.body.fechainicio,
        fechafinal: req.body.fechafinal
    });
    try {
        const savedBrote = await brote.save();
        res.json(savedBrote);
        console.log(savedBrote);
    }
    catch(err) {
        res.json({race: err});
    }
});

//DELETE
router.delete('/:broteId', async (req, res) => {
    try {
        const removedBrote = await Brote.remove({_id: req.params.broteId});
        res.json(removedBrote);
    } catch(err) {
        res.json({race: err});
    }
});

module.exports = router;