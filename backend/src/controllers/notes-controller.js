const note_model = require('../models/note-model');
const notes_controller = {};

notes_controller.getNotes = async (req, res) => {
    // funcion asincrona que encuentra todas las notas en la base de datos
    // y las devuelve en un arreglo json el cual es almacenado en una constante
    const notes = await note_model.find();
    // devolvemos el arreglo al navegador
    res.json(notes);
};

notes_controller.createNote = async (req, res) => {
    // rebibe los datos que envia el navegador y los almacena en constantes
    const { title, content, author, date } = req.body;
    // crea una nueva nota
    const Note = new note_model({
        title,
        content,
        author,
        date,
    });
    // guarda la nota en la base de datos
    await Note.save();
    // devuelve al navegador
    res.json({ message: "Note " + `${title}` + " was created succesfull" });
};

notes_controller.getNote = async (req, res) => {
    // recibe el parametro id que envia el navegador 
    const { id } = req.params;
    // encuentra una nota por su id
    const note = await note_model.findById(id);
    // devuelve un mensaje al navegador
    res.json(note);
};
notes_controller.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;

    await note_model.findByIdAndUpdate(id, {
        title,
        content,
        author
    });

    res.json({ message: "Note " + `${title}` + " was updated succesfull" });
};

notes_controller.deleteNote = async (req, res) => {
    // recibe el parametro id que envia el navegador
    const { id } = req.params;
    // elimina una nota por su id
    await note_model.findByIdAndDelete(id);
    // devuleve un mensaje al navegador
    res.json({ message: "Note " + `${id}` + " was deleted succesfull" });
};

module.exports = notes_controller;
