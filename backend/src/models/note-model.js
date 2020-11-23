const { Schema, model } = require('mongoose');

// definimos el esquema que tendrá nuestro modelo de datos
const noteSchema = new Schema({
    title: String,
    content: { type: String, required: true },
    author: String,
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
});

// exporta el modelo de datos basado en el esquena definido previamente
module.exports = model('Note', noteSchema);
