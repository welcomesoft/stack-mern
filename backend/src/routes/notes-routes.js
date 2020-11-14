const { Router } = require("express");
const router = Router();

const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes-controller');

router.route('/api/notes')
    .get(getNotes)
    .post(createNote)

router.route('/api/notes/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;