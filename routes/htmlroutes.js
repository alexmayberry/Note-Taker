const router = require("express").Router();
const path = require("path");

// GET Route for html notes page
router.get('/notes', (req,res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for html homepage
router.get('/', (req,res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;