const express = require('express');
const app = express();
const  cors = require('cors');
const mongoose = require('mongoose');
const ResearchModel = require('./models/Research');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blair:admin@cluster0.ohr5j.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.post('/insert', async (req,res)=>{
   // const research = new ResearchModel({ResearchID:req.body.ResearchID,ProjectName:req.body.ProjectName,Industry:req.body.Industry,Status:req.body.Status,PrivacyLevel:req.body.PrivacyLevel,Promblem_Statement:req.body.Problem_Statement,Date:req.body.Date,ResearcherID:req.body.ResearcherID,Time_Length:req.body.Time_Length,KeyInsight:req.body.KeyInsight,KeyPainPoint:req.body.KeyPainPoint,SampleSize:req.body.SampleSize,LocationID:req.body.LocationID});
    const research = new ResearchModel({ResearchID:req.body.ResearchID,
    Company:req.body.Company,
    ProjectName:req.body.ProjectName,
    Industry:req.body.IndustryName,
    Status:req.body.Status,
    Privacy_Level:req.body.Privacy_Level,
    Problem_Statement:req.body.Problem_Statement,
    Date:req.body.Date,
    ResearcherID:req.body.ResearcherID,
    Time_Length:req.body.Time_Length,
    KeyInsight:req.body.KeyInsight,
    KeyPainPoint:req.body.KeyPainPoint,
    SampleSize:req.body.SampleSize,
    LocationID:req.body.LocationID
});
   
    await research.save();
    res.send('Inserted Data');
});

app.post('/delete', async(req,res)=>{
    await ResearchModel.findByIdAndDelete(req.body.id).exec();
    res.send("Research removed.")
});

app.get('/get-all',(req,res)=>{
    ResearchModel.find({},(err,result)=>{
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/hello', (req,res)=>{
    res.send('Hello from  Express');
});

app.listen(3001, ()=>{
    console.log('Server is running');
});