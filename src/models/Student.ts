var mongoose = require('mongoose');


//Schema

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Phone'
    }]
});
// Turn the schema into a model
module.exports = mongoose.model('Student', StudentSchema);