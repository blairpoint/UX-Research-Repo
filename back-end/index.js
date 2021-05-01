const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
//const ObjectId = require('mongodb').ObjectId;]
const ResearchModel_sp2 = require('./models/Research_sp2');
const ResearcherModel_sp2 = require('./models/Researcher_sp2');
const CounterModel_sp2 = require('./models/Counter_sp2');

app.use(cors());
app.use(express.json());

/* MongoDB Connection String */

mongoose.connect('mongodb+srv://alice:admin@cluster0.ohr5j.mongodb.net/sprint2?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /* AMF: useCreateIndex true and useFindAndModify false forces Mongoose not to use deprecated functions */
    useCreateIndex: true,
    useFindAndModify: false
});

/* Node.js Express Routes */

/* /insert
Receives the form input from the front-end Create.js form, and maps the input from the request
body to the fields in the research_sp2 collection schema. When the data has been saved to the
database it sends a confirmation message to the front-end code.
It also contains a function to increment the research ID counter in the MongoDB counter_sp2
collection and retrieve the new counter number. The number is incremented at this point so that
if there is a failure later in the process there will not be a clash of research IDs in the future. */

app.post('/insert', (req, res) => {
    
    let new_rid;

     CounterModel_sp2.findByIdAndUpdate("research_id", { $inc: { seq: 1 } }, { new: true },
        function (err, ridres) {
            if (err) {
                console.log(err)
            }
            else {
                new_rid = ridres.seq;  
            
                const research_sp2 = new ResearchModel_sp2(
                    {
            
                        Industry: req.body.Industry,
                        Company: req.body.Company,
                        Problem_Statement: req.body.Problem_Statement,
                        Methods: req.body.Methods,
                        Tags: req.body.Tags,
                        Creation_Date: req.body.Creation_Date,
                        Research_ID: new_rid,
                        Location: req.body.Location,
                        Project_Name: req.body.Project_Name,
                        Key_Insights: req.body.Key_Insights,
                        Sample_Size: req.body.Sample_Size,
                        End_Date: req.body.End_Date,
                        Start_Date: req.body.Start_Date,
                        Findings: req.body.Findings,
                        Creator: req.body.Creator,
                        Researchers: req.body.Researchers,
                        Research_Outputs: req.body.Research_Outputs
            
                    });
                research_sp2.save();
                res.send('Inserted Data');

            }
        })

    
});

/* /get-all
Called by the View.js front-end code, retrieves all research documents from the MongoDB
research_sp2 collection and passes it to the front-end. */

app.get('/get-all', (req, res) => {
    ResearchModel_sp2.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

/* /search/:val
Called by the View.js front-end code which passes in a keyword. The MongoDB research_sp2 text
index is searched for the keyword and the result is passed back to the front-end code. */

app.get('/search/:val', (req, res) => {
    ResearchModel_sp2.find({ $text: { $search: req.params.val } }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

/* /get-all-researchers
Called by the Create.js front-end code to bring in a list of researchers from the MongoDB
researchers_sp2 collection. This is a placeholder function so that we could demonstrate the flow
of adding researchers to a research document, as it is anticipated that the product will be
integrated with an IBM identity management interface in the future. */

app.get('/get-all-researchers', (req, res) => {

    ResearcherModel_sp2.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

/* /searchResearcher/:val
Converts the request value to a regular expression and searches all fields of the MongoDB
researcher_sp2 collection (first name, last name, position and email) and returns matches on
sub-strings. We did not end up using this function in the front-end, but it has been retained for
now to consider something similar for expanding the research document search capability to
include a sub-string/wildcard search in future. */

app.get('/searchResearcher/:val', (req, res) => {

    var re = new RegExp(req.params.val, 'i');

    ResearcherModel_sp2.find(

        {
            $or: [

                { lName: { $regex: re } },
                { fName: { $regex: re } },
                { Position: { $regex: re } },
                { Email: { $regex: re } }

            ]
        },

        (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
});

/* /filterSearchIndustry/:val1/val2: 
Called by the View.js front-end code when choosing an Industry type to search for with a keyword. Created
for the demonstration to return all documents in the MongoDB research_sp2 collection that contain a match
for the request value in the Industry field and a match for the keyword in the research_sp2 text index. This
would not be used in production code as the filtering would be rewritten. */ 

/* val1 = industry type, val2 = keyword */

app.get('/filterSearchIndustry/:val1/:val2', (req, res) => {
    ResearchModel_sp2.find(

        { $and: [{ Industry: req.params.val1 }, { $text: { $search: req.params.val2 } }] }, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
});

/* /filterSearchIndustryBlank/:val1 
Called by the View.js front-end code when choosing an Industry type to search for with no keyword. Created
for the demonstration to return all documents in the MongoDB research_sp2 collection that contain a match
for the request value in the Industry field. This would not be used in production code as the filtering would
be rewritten.  */

/* val1 = industry type */

app.get('/filterSearchIndustryBlank/:val1', (req, res) => {
    ResearchModel_sp2.find({ Industry: req.params.val1 }, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
});

/* /get-record/:val 
Called by the Viewcard.js front-end code, retrieves the requested research document from the MongoDB
research_sp2 collection and passes it to the front-end. The research document is referenced by MongoDB
document ObjectID.  */

app.get('/get-record/:val', (req, res) => {
    ResearchModel_sp2.findById(req.params.val, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

/* /get-record-researchers/:val 
Called by the Viewcard.js front-end code. Returns an array of researcher documents from the MongoDB
researcher_sp2 collection. The relevant researchers are identified from their ObjectIDs that are stored in
the research documents. This is a workaround due to issues using Mongoose populate(). Researchers is a 
placeholder until integrated with IBM Identity Management directory. */

app.get('/get-record-researchers/:val', async (req, res) => {

    let record_res2 = new Array;

    ResearchModel_sp2.findById(req.params.val, async (err, result) => {
        let record_res = result.Researchers;
        
        for (let r of record_res) {
            await ResearcherModel_sp2.findById(r, (err, resresult) => {
                if (err) {
                    console.error(err);
                } else {
                    record_res2.push(resresult);

                }
            })

        };

        if (err) {
            res.send(err);
        } else {
            res.json(record_res2);
        }

    });

});

// app.get('/hello', (req, res) => {
//     res.send('Hello from  Express');
// });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

