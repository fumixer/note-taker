// Dependencies
const router = require('express').Router();

const saveData = require('../db/saveData');

// GET request
// 
router.get('/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json(err));
});

// POST request
// Send the POST request(infromation from the client) to /notes and save the data
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(400).json(err));
});

// Bonus - DELETE request


module.exports = router;