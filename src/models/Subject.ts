var mongoose = require('mongoose');


//Schema

const SubjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});
// Turn the schema into a model
module.exports = mongoose.model('Subject', SubjectSchema);