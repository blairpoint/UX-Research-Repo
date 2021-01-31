const mongoose = require('mongoose');
/* AMF: For testing only. */

const AliceSchema = new mongoose.Schema({
    Company: {
        type:String,
        required: true
    },
    Demographic: {
        type:String,
        required:false
    },
    Industry: {
        type:String,
        required:false
    },
    KeyWords: {
        type:String,
        required:false
    }
})

AliceSchema.index({'$**': 'text'});

const AliceModel = mongoose.model('alice1', AliceSchema);
module.exports = AliceModel;