const express = require('express');
const app = express();
const  cors = require('cors');
const mongoose = require('mongoose');
const ResearchModel = require('./models/Research');

app.use(cors());
app.use(express.json());
var yo = "Technologies"
mongoose.connect('mongodb+srv://blair:admin@cluster0.ohr5j.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.post('/insert', async (req,res)=>{
   // const research = new ResearchModel({ResearchID:req.body.ResearchID,ProjectName:req.body.ProjectName,Industry:req.body.Industry,Status:req.body.Status,PrivacyLevel:req.body.PrivacyLevel,Promblem_Statement:req.body.Problem_Statement,Date:req.body.Date,ResearcherID:req.body.ResearcherID,Time_Length:req.body.Time_Length,KeyInsight:req.body.KeyInsight,KeyPainPoint:req.body.KeyPainPoint,SampleSize:req.body.SampleSize,LocationID:req.body.LocationID});
    const research = new ResearchModel({Date:req.body.Date,	
        ResearchID:req.body.ResearchID,	
        Status:req.body.Status,	
        Privacy_Level:req.body.Privacy_Level,	
        Country:req.body.Country,	
        ResearcherID:req.body.ResearcherID,	
        ProjectName:req.body.ProjectName,	
        Problem_Statement:req.body.Problem_Statement,	
        Tags:req.body.Tags,	
        KeyInsight:req.body.KeyInsight,	
        KeyPainPoint:req.body.KeyPainPoint,	
        SampleSize:req.body.SampleSize,	
        Methods:req.body.Methods,	
        Industry:req.body.IndustryName,	
        Company:req.body.Company,	
        URL_ID:req.body.URL_ID,	
        Demographic:req.body.Demographic,	
        Commentary:req.body.Commentary,	
        Time_in_days:req.body.Time_in_days,	
});
   
    await research.save();
    res.send('Inserted Data');
});

app.post('/delete', async(req,res)=>{
    await ResearchModel.findByIdAndDelete(req.body.id).exec();
    res.send("Research removed.")
});


app.get('/search',(req,res)=>{
    ResearchModel.find({ Industry: "Technologies" },(err,result)=>{
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
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