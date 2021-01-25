const express = require('express');
const app = express();
const  cors = require('cors');
const mongoose = require('mongoose');
const StudentModel = require('./models/Student');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blair:admin@cluster0.ohr5j.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.post('/insert', async (req,res)=>{
    const student = new StudentModel({name:req.body.name,degree:req.body.degree});
    await student.save();
    res.send('Inserted Data');
});

app.post('/delete', async(req,res)=>{
    await StudentModel.findByIdAndDelete(req.body.id).exec();
    res.send("Student removed.")
});

app.get('/get-all',(req,res)=>{
    StudentModel.find({},(err,result)=>{
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
