/* Describes the Schema for the Research_sp2 MongoDB database collection.  */

const mongoose = require('mongoose');

const ResearchSchema_sp2 = new mongoose.Schema({

    Industry:String,
    Company:String,
    Problem_Statement:String,
    Methods:[String],
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
<<<<<<< HEAD
    Research_Outputs:[{ Title: [String], URL:[String ]}]
=======
    Research_Outputs:[{ Title: String, URL: String }]
>>>>>>> e5fa3e4952425b581d781fd978efc100d5e18f64
})

/* AMF: this sets up the index information. */

ResearchSchema_sp2.index({'$**': 'text'});

const ResearchModel_sp2 = mongoose.model('research_sp2', ResearchSchema_sp2);
module.exports = ResearchModel_sp2;