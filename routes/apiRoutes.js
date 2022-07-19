// Dependencies
const router = require('express').Router();
const fs = require(`fs`);
const {uuid} = require(`uuidv4`);

router.get('/notes', function (req, res) {
    let notes = JSON.parse(fs.readFileSync(`./db/db.json`, `utf-8`))
    res.json(notes); 
});

// POST request
// Send the POST request(infromation from the client) to /notes and save the data
router.post('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(`./db/db.json`, `utf-8`))
    let newNotes = req.body;
    newNotes.id = uuid();
    let updatedNotes = [...notes, newNotes];
    fs.writeFileSync(`./db/db.json`, JSON.stringify(updatedNotes)); 
    res.json(updatedNotes);
});


// Bonus - DELETE request
router.delete('/notes/:id', (req, res) => {
    let noteDelete = req.params.id;
    let notes = JSON.parse(fs.readFileSync(`./db/db.json`, `utf-8`))
    
    let filteredNotes = notes.filter((note) => note.id != noteDelete);

    fs.writeFileSync(`./db/db.json`, JSON.stringify(filteredNotes));
    res.json(filteredNotes);

})

module.exports = router;