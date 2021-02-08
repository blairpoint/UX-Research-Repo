const mongoose = require('mongoose');
/* AMF: ResearchSchema_sp2 is for the collection research_sp2. 
This is a copy of research1 with an index (and different document objectIDs). */
const ResearchSchema_sp2 = new mongoose.Schema({

    Industry:String,
    Company:String,
    Problem_Statement:String,
    Methods:[String],
    Tags:[String],
    Creation_Date:{ type: Date, default: Date.now},
    Research_ID:Number,
    Location:String,
    Project_Name:String,
    Key_Insights:String,
    Sample_Size:Number,
    End_Date:Date,
    Start_Date:Date,
    Findings:String,
    /* Temporary String placeholder as Creator ID will not yet be an Object ID */
    Creator:String,
//    Creator: {type: mongoose.Schema.Types.ObjectId, ref: 'Researcher_sp2'},
    Researchers:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Researcher_sp2' } ],
    Research_Outputs:[ { Title: String, Description: String, URL: String } ]
})

/* AMF: this sets up the index information. */

ResearchSchema_sp2.index({'$**': 'text'});

/* AMF: ResearchModel2 points to the collection research2. 
This is a copy of research1 with an index (and different document objectIDs). */

const ResearchModel_sp2 = mongoose.model('research_sp2', ResearchSchema_sp2);
module.exports = ResearchModel_sp2;