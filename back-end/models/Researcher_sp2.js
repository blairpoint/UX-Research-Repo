const mongoose = require('mongoose');
/* AMF: ResearchSchema_sp2 is for the collection research_sp2. 
This is a copy of research1 with an index (and different document objectIDs). */
const ResearcherSchema_sp2 = new mongoose.Schema({

    fName:String,
    lName:String,
    Position:String,
    Email:String

})

/* AMF: ResearchModel2 points to the collection research2. 
This is a copy of research1 with an index (and different document objectIDs). */

const ResearcherModel_sp2 = mongoose.model('researcher_sp2', ResearcherSchema_sp2);
module.exports = ResearcherModel_sp2;