const mongoose = require('mongoose');
const ResearchSchema = new mongoose.Schema({
    Date:{
        type:String,
        required: true
    },
    ResearchID:{
        type:String,
        required: true
    },
    Status:{
        type:String,
        required: true
    },
    Privacy_Level:{
        type:String,
        required: true
    },
    Country:{
        type:String,
        required: true
    },
    ResearcherID:{
        type:String,
        required: true
    },
    
    ProjectName:{
        type:String,
        required: true
    },
    Problem_Statement:{
        type:String,
        required: true
    },
    Tags:{
        type:String,
        required: true
    },
    KeyInsight:{
        type:String,
        required: true
    },
    KeyPainPoint:{
        type:String,
        required: true
    },
    SampleSize: {
        type:String,
        required: true
    },
    Methods:{
        type:String,
        required: true
    },
    Demographic:{
        type:String,
        required: true
    },
    Industry:{
        type:String,
        required: true
    },
    Company:{
        type:String,
        required: true
    },
    URL_ID:{
        type:String,
        required: false
    },
    Commentary:{
        type:String,
        required: false
    },
    Time_in_days:{
        type:String,
        required: true
    },
    
    
})

const ResearchModel = mongoose.model('research1', ResearchSchema);
module.exports = ResearchModel;