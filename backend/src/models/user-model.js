const { Schema, model } = require('mongoose');

// definimos el esquema que tendrá nuestro modelo de datos
const userSchema = new Schema({
    username: { 
        type: String, 
        required: true,
        trim: true,
        unique: true 
    }
}, {
    timestamps: true
});

// exporta el modelo de datos basado en el esquema definido previamente
module.exports = model('User', userSchema);


