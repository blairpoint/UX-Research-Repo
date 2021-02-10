const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const ResearchModel = require('./models/Research');
/* AMF: ResearchModel2 points to the collection research2. 
This is a copy of research1 with an index (and different document objectIDs). */
// const ResearchModel2 = require('./models/Research2');
const ObjectId = require('mongodb').ObjectId;
// const Research_real_data = require('./models/Research_real_data');
const ResearchModel_sp2 = require('./models/Research_sp2');
const ResearcherModel_sp2 = require('./models/Researcher_sp2');
const CounterModel_sp2 = require('./models/Counter_sp2');


app.use(cors());
app.use(express.json());
//var yo = "Technologies";

mongoose.connect('mongodb+srv://alice:admin@cluster0.ohr5j.mongodb.net/sprint2?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    /* AMF: useCreateIndex true and useFindAndModify false forces Mongoose not to use deprecated functions */
    useCreateIndex:true,
    useFindAndModify:false
});

app.post('/insert', async (req,res)=>{
    var new_rid = 0;
    // CounterModel_sp2.findByIdAndUpdate(
    //     { _id: "research_id" },
    //     { $inc: { seq:1 } },
    //     { new: true }
    //     );

    //var new_rid;

        await CounterModel_sp2.findByIdAndUpdate("research_id", { $inc: { seq:1 } }, { new: true }, 
        function (err, ridres) { 
            if (err){ 
            console.log(err) 
            } 
            else{ 
            new_rid = ridres.seq;
             console.log(new_rid);
            } 
            })

    const research_sp2 = new ResearchModel_sp2(
        
        {
            
         Industry:req.body.Industry,
         Company:req.body.Company,	
         Problem_Statement:req.body.Problem_Statement,
         Methods:req.body.Methods,
         Tags:req.body.Tags,
         Creation_Date:req.body.Creation_Date,
         Research_ID:new_rid,
         Location:req.body.Location,
         Project_Name:req.body.Project_Name,
         Key_Insights:req.body.Key_Insights,
         Sample_Size:req.body.Sample_Size,
         End_Date:req.body.End_Date,
         Start_Date:req.body.Start_Date,
         Findings:req.body.Findings,
         Creator:req.body.Creator,
         Researchers:req.body.Researchers,
         Research_Outputs:req.body.Research_Outputs
        	
 });
    console.log(new_rid);
     await research_sp2.save();
     res.send('Inserted Data');
 });

 // backup
//  app.post('/insert', async (req,res)=>{

//     const research_sp2 = new ResearchModel_sp2({

//         Industry:req.body.Industry,
//         Company:req.body.Company,	
//         Problem_Statement:req.body.Problem_Statement,
//         Methods:req.body.Methods,
//         Tags:req.body.Tags,
//         Creation_Date:req.body.Creation_Date,
//         Research_ID:req.body.Research_ID,
//         Location:req.body.Location,
//         Project_Name:req.body.Project_Name,
//         Key_Insights:req.body.Key_Insights,
//         Sample_Size:req.body.Sample_Size,
//         End_Date:req.body.End_Date,
//         Start_Date:req.body.Start_Date,
//         Findings:req.body.Findings,
//         Creator:req.body.Creator,
//         Researchers:req.body.Researcher_ID,
//         Research_Outputs:req.body.Research_Outputs
           
// });
   
//     await research_sp2.save();
//     res.send('Inserted Data');
// });

//  app.post('/sp2inserttest', async (req,res)=>{
//     const research_sp2 = new ResearchModel_sp2({

//         Industry:"Forestry"
//         // Company:req.body.Company,	
//         // Problem_Statement:req.body.Problem_Statement,
//         // Methods:req.body.Methods,
//         // Tags:req.body.Tags,
//         // Creation_Date:req.body.Creation_Date,
//         // Research_ID:req.body.Research_ID,
//         // Location:req.body.Country,
//         // ProjectName:req.body.ProjectName,
//         // Key_Insights:req.body.Key_Insights,
//         // Sample_Size:req.body.Sample_Size,
//         // End_Date:req.body.End_Date,
//         // Start_Date:req.body.Start_Date,
//         // Findings:req.body.Findings,	
//         // Researchers:req.body.Researcher_ID,
//         // Research_Outputs:req.body.Research_Outputs
           
// });
   
//     await research_sp2.save();
//     res.send('Inserted Data');
// });

 
app.get('/get-all',(req,res)=>{
    ResearchModel_sp2.find({},(err,result)=>{
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/search/:val',(req,res)=>{
    ResearchModel_sp2.find({ $text: {$search: req.params.val} },(err,result)=>{
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/get-all-researchers',(req,res)=>{

    ResearcherModel_sp2.find({},(err,result)=>{
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    });

 app.get('/searchResearcher/:val',(req,res)=>{

    var re = new RegExp(req.params.val, 'i');
    
        ResearcherModel_sp2.find(
            
            { $or: [
            
            {lName: {$regex: re}},
            {fName: {$regex: re}},
            {Position: {$regex: re}},
            {Email: {$regex: re}}
    
            ] },
            
            (err,result)=>{
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });

    app.get('/filterSearch/:val1/:val2',(req,res)=>{
        ResearchModel_sp2.find({
            Industry: req.params.val1,
            $text: {$search: req.params.val2} },(err,result)=>{
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });

    app.get('/filterSearchIndustry/:val1/:val2',(req,res)=>{
        ResearchModel_sp2.find({ 
            Industry: req.params.val1,
            $text: {$search: req.params.val2} },(err,result)=>{
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });

    app.get('/get-record/:val', (req,res)=>{  
        ResearchModel_sp2.findById(req.params.val,(err,result)=>{
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });

// app.get('/get-record', (req,res)=>{  
//     ResearchModel_sp2.findById(req.body.id,(err,result)=>{
//         if(err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

//  app.get('/rid',(req,res)=>{

//     CounterModel_sp2.findByIdAndUpdate(
//         { _id: "research_id" },
//         { $inc: { seq:1 } },
//         { new: true },
//         function(err, result) {
//             if (err) {
//               res.send(err);
//             } else {
//               res.send(result);
//             }
//           });
//         }
// );

/*  Pre-sprint2 database changes */
// app.post('/insert', async (req,res)=>{
//    // const research = new ResearchModel({ResearchID:req.body.ResearchID,ProjectName:req.body.ProjectName,Industry:req.body.Industry,Status:req.body.Status,PrivacyLevel:req.body.PrivacyLevel,Promblem_Statement:req.body.Problem_Statement,Date:req.body.Date,ResearcherID:req.body.ResearcherID,Time_Length:req.body.Time_Length,KeyInsight:req.body.KeyInsight,KeyPainPoint:req.body.KeyPainPoint,SampleSize:req.body.SampleSize,LocationID:req.body.LocationID});
//     const research = new ResearchModel2({
//         _id: req.body._id,
//         Date:req.body.Date,	
//         ResearchID:req.body.ResearchID,	
//         Status:req.body.Status,	
//         Privacy_Level:req.body.Privacy_Level,	
//         Country:req.body.Country,	
//         ResearcherID:req.body.ResearcherID,	
//         ProjectName:req.body.ProjectName,	
//         Problem_Statement:req.body.Problem_Statement,	
//         Tags:req.body.Tags,	
//         KeyInsight:req.body.KeyInsight,	
//         KeyPainPoint:req.body.KeyPainPoint,	
//         SampleSize:req.body.SampleSize,	
//         Methods:req.body.Methods,	
//         Industry:req.body.IndustryName,	
//         Company:req.body.Company,	
//         URL_ID:req.body.URL_ID,	
//         Demographic:req.body.Demographic,	
//         Commentary:req.body.Commentary,	
//         Time_in_days:req.body.Time_in_days,	
// });
   
//     await research.save();
//     res.send('Inserted Data');
// });

/*  Pre-sprint2 database changes */
// app.post('/delete', async(req,res)=>{
//     await ResearchModel.findByIdAndDelete(req.body.id).exec();
//     res.send("Research removed.")
// });

/*  Pre-sprint2 database changes */
// app.get('/search',(req,res)=>{
//     ResearchModel.find({ Industry: "Technologies" },(err,result)=>{
//         if(err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });




/* AMF: search2 is a search within a specific field. */

/*  Pre-sprint2 database changes */
// app.get('/search2',(req,res)=>{
//     ResearchModel2.find({ Industry: "Technologies" },(err,result)=>{
//         if(err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

/*  Pre-sprint2 database changes */
// app.get('/search3/:val',(req,res)=>{
//     ResearchModel2.find({ $text: {$search: req.params.val} },(err,result)=>{
//         if(err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

/*  Pre-sprint2 database changes */
// app.post('/get-record', (req,res)=>{  
//     ResearchModel2.findById(req.body.id,(err,result)=>{
//         // ResearchModel.findById(req.body.id,(err,result)=>{
//         if(err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

/*  Pre-sprint2 database changes */
// app.get('/search4/:val',(req,res)=>{
//     Research_real_data.find({ $text: {$search: req.params.val} },(err,result)=>{
//         if(err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });


/*  Pre-sprint2 database changes */
// app.get('/get-all',(req,res)=>{
//     ResearchModel2.find({},(err,result)=>{
//         if(err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });



app.get('/hello', (req,res)=>{
    res.send('Hello from  Express');
});

app.listen(3001, ()=>{
    console.log('Server is running');
});

