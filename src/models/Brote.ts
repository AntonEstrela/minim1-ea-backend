var mongoose = require('mongoose');


//Schema

const BroteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    fechainicio: {
        type: String,
        required: true
    },
    fechafinal: {
        type: String,
        required: true
    }
});
// Turn the schema into a model
module.exports = mongoose.model('Brote', BroteSchema);