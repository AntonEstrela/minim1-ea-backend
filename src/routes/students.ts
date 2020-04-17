import express from 'express';
const router = express.Router();
const Student = require('../models/Student');
const Subject = require('../models/Subject');
const Phone = require('../models/Phone');
const app = require('../app');

app

// Get all
router.get('/', async (req, res) => {
    try{
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.json({race: err});
    }
});

//POST
router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        address: req.body.address,
        phones: req.body.phones
    });
    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
        console.log(savedStudent);
    }
    catch(err) {
        res.json({race: err});
    }
});

//DELETE
router.delete('/:studentId', async (req, res) => {
    try {
        const removedStudent = await Student.remove({_id: req.params.studentId})
        res.json(removedStudent);
    } catch(err) {
        res.json({race: err});
    }
});

module.exports = router;