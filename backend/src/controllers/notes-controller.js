const notes_controller = {};

notes_controller.getNotes = (req, res) => res.json({notes: []});
notes_controller.createNote = (req, res) => res.json({message: 'Note was created succesfull'});

notes_controller.getNote = (req, res) => res.json({note: 'Dios es bueno todo el tiempo'});
notes_controller.updateNote = (req, res) => res.json({message: 'Note was updated succesfull'});
notes_controller.deleteNote = (req, res) => res.json({message: 'Note was deleted succesfull'});

module.exports = notes_controller;
