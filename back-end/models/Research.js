const mongoose = require('mongoose');
const ResearchSchema = new mongoose.Schema({
    Date:{
        type:String,
        required: true
    },
    ResearchID:{
        type:String,
        required: false
    },
    Status:{
        type:String,
        required: false
    },
    Privacy_Level:{
        type:String,
        required: false
    },
    Country:{
        type:String,
        required: false
    },
    ResearcherID:{
        type:String,
        required: false
    },
    
    ProjectName:{
        type:String,
        required: false
    },
    Problem_Statement:{
        type:String,
        required: false
    },
    Tags:{
        type:String,
        required: false
    },
    KeyInsight:{
        type:String,
        required: false
    },
    KeyPainPoint:{
        type:String,
        required: false
    },
    SampleSize: {
        type:String,
        required: false
    },
    Methods:{
        type:String,
        required: false
    },
    Demographic:{
        type:String,
        required: false
    },
    Industry:{
        type:String,
        required: false
    },
    Company:{
        type:String,
        required: false
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
        required: false
    },
    
    
})

const ResearchModel = mongoose.model('research1', ResearchSchema);
module.exports = ResearchModel;