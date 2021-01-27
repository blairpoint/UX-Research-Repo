const mongoose = require('mongoose');
const ResearchSchema = new mongoose.Schema({
    ResearchID:{
        type:String,
        required: true
    },
    Company: {
        type:String,
        required:true
    },
    ProjectName: {
        type: String,
        required: true
    
    },
    Industry: {
        type:String,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    Privacy_Level: {
        type: String,
        required: true
    },
    Problem_Statement: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    ResearcherID: {
        type: String,
        required: true
    },
    Time_Length: {
        type: String,
        required: true
    },
    KeyInsight: {
        type:String,
        required: true
    },
    KeyPainPoint: {
        type: String,
        required: true
    },
    SampleSize: {
        type: String,
        required: true
    },
    LocationID: {
        type: String,
        required: true
    }
})

const ResearchModel = mongoose.model('research1', ResearchSchema);
module.exports = ResearchModel;