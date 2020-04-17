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
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (err) {
        res.json({race: err});
    }
});

//POST
router.post('/', async (req, res) => {
    const subject = new Subject({
        name: req.body.name,
        students: req.body.students
    });
    try {
        const savedSubject = await subject.save();
        res.json(savedSubject);
        console.log(savedSubject);
    }
    catch(err) {
        res.json({race: err});
    }
});

//DELETE
router.delete('/:subjectId', async (req, res) => {
    try {
        const removedSubject = await Subject.remove({_id: req.params.subjectId});
        res.json(removedSubject);
    } catch(err) {
        res.json({race: err});
    }
});

module.exports = router;