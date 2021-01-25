const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    degree: {
        type:String,
        required:false
    }
})

const StudentModel = mongoose.model('students', StudentSchema);
module.exports = StudentModel;