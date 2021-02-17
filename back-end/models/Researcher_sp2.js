/* Describes the Schema for the Researcher_sp2 MongoDB database collection. */

const mongoose = require('mongoose');

const ResearcherSchema_sp2 = new mongoose.Schema({

    fName:String,
    lName:String,
    Position:String,
    Email:String

})

const ResearcherModel_sp2 = mongoose.model('researcher_sp2', ResearcherSchema_sp2);
module.exports = ResearcherModel_sp2;