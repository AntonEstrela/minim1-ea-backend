var mongoose = require('mongoose');


//Schema

const PhoneSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
});
// Turn the schema into a model
module.exports = mongoose.model('Phone', PhoneSchema);