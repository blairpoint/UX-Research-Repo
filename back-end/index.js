const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const ResearchModel_sp2 = require('./models/Research_sp2');
const ResearcherModel_sp2 = require('./models/Researcher_sp2');
const CounterModel_sp2 = require('./models/Counter_sp2');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://alice:admin@cluster0.ohr5j.mongodb.net/sprint2?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /* AMF: useCreateIndex true and useFindAndModify false forces Mongoose not to use deprecated functions */
    useCreateIndex: true,
    useFindAndModify: false
});

app.post('/insert', async (req, res) => {
    var new_rid = 0;

    await CounterModel_sp2.findByIdAndUpdate("research_id", { $inc: { seq: 1 } }, { new: true },
        function (err, ridres) {
            if (err) {
                console.log(err)
            }
            else {
                new_rid = ridres.seq;
                console.log(new_rid);
            }
        })

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
    await research_sp2.save();
    res.send('Inserted Data');
});


app.get('/get-all', (req, res) => {
    ResearchModel_sp2.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/search/:val', (req, res) => {
    ResearchModel_sp2.find({ $text: { $search: req.params.val } }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/get-all-researchers', (req, res) => {

    ResearcherModel_sp2.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

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


app.get('/filterSearchIndustryBlank/:val1', (req, res) => {
    ResearchModel_sp2.find({ Industry: req.params.val1 }, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
});


app.get('/get-record/:val', (req, res) => {
    ResearchModel_sp2.findById(req.params.val, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


app.get

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



app.get('/hello', (req, res) => {
    res.send('Hello from  Express');
});

app.listen(3001, () => {
    console.log('Server is running');
});

