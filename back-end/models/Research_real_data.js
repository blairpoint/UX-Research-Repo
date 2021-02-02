const mongoose = require('mongoose');
/* AMF: Research_schema_real_data is for the collection research_real_data. 
This is a copy of research1 with an index (and different document objectIDs). */
const Research_schema_real_data = new mongoose.Schema({
    _id:{
        type:String,
        required: true
    },
    Commentary:{
        type:String,
        required: true
    },
    Company:{
        type:String,
        required: false
    },
    Creation_date:{
        type:String,
        required: false
    },
    Start_date:{
        type:String,
        required: false
    },
    Completion_date:{
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
    Key_Insights_Painpoints:{
        type:String,
        required: false
    },
    Location:{
        type:String,
        required: false
    },
    Methods:{
        type:String,
        required: false
    },
    Research_Outputs:{
        type:String,
        required: false
    },
    Privacy_Level:{
        type:Boolean,
        required: false
    },
    Problem_Statement:{
        type:String,
        required: false
    },
    ProjectName: {
        type:String,
        required: false
    },
    ResearchID:{
        type:String,
        required: false
    },
    Researchers:{
        type:Array,
        required: false
    },
    SampleSize:{
        type:String,
        required: false
    },
    Status:{
        type:String,
        required: false
    },
    Time_in_days:{
        type:String,
        required: false
    },
    URLs:{
        type:Array,
        required: false
    }
      
})

/* AMF: this sets up the index information. */

Research_schema_real_data.index({'$**': 'text'});

/* AMF: ResearchModel2 points to the collection research2. 
This is a copy of research1 with an index (and different document objectIDs). */

const Research_real_data = mongoose.model('Research_real_data', Research_schema_real_data);
module.exports = Research_real_data;