const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("../helpers/uuid")


// GET notes on lefthand notes click
router.route('/notes')
    .get((req,res) => {
        res.json(db);
    })
// POST notes on save note button click
    .post((req, res) => {
        // deconstruct post json body
        const {title, text} = req.body;

        // if all required properites are present
        if (title && text) {
            const newNote = {
                title,
                text,
                note_id: uuid(),
            };
            db.push(newNote)
            fs.writeFile('../db/db.json', db, (err) => {
                err ? console.log(err) : console.log("it worked?!")
            });
    
            const response = {
                status: 'success',
                body: newNote
            };
    
            res.status(200).json(response);
        } else {
            res.json('Error in posting note. Please ensure notes has title and text properties.');
        }
    })


//CREATE note button on 'new note' button click
    //write file with fs

// DELETE notes on trashcan button click
    //delete file with fs /api/notes/:id

module.exports = router;