const mongoose = require('mongoose');
/* AMF: ResearchSchema2 is for the collection research2. 
This is a copy of research1 with an index (and different document objectIDs). */
const ResearchSchema2 = new mongoose.Schema({
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
        type:"array",
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

/* AMF: this sets up the index information. */

ResearchSchema2.index({'$**': 'text'});

/* AMF: ResearchModel2 points to the collection research2. 
This is a copy of research1 with an index (and different document objectIDs). */

const ResearchModel2 = mongoose.model('research2', ResearchSchema2);
module.exports = ResearchModel2;