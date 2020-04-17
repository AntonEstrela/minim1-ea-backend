import express from 'express';
const router = express.Router();
const Phone = require('../models/Phone');
const app = require('../app');

app

// Get all
router.get('/', async (req, res) => {
    try{
        const phones = await Phone.find();
        res.json(phones);
    } catch (err) {
        res.json({race: err});
    }
});

//POST
router.post('/', async (req, res) => {
    const phone = new Phone({
        name: req.body.name,
        number: req.body.number
    });
    try {
        const savedPhone = await phone.save();
        res.json(savedPhone);
        console.log(savedPhone);
    }
    catch(err) {
        res.json({race: err});
    }
});

//DELETE
router.delete('/:phoneId', async (req, res) => {
    try {
        const removedPhone = await Phone.remove({_id: req.params.phoneId});
        res.json(removedPhone);
    } catch(err) {
        res.json({race: err});
    }
});

module.exports = router;