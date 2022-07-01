var express = require('express');
var app = express();
var mongoose = require('mongoose');
app.use(express.json());

mongoose.connect('mongodb://localhost/cryptoDetailsDB',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connected to db');
    }
})

var cryptoDetailsSchema = require('./models/schema');
app.post('/postdata', function(req,res){
    var body = req.body;
    var cds = new cryptoDetailsSchema(body)
    cds.save((err,doc)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        if(doc){
            console.log(doc);
            res.send(doc);
        }
    })
})
app.get('/getdata', function(req,res){
    cryptoDetailsSchema.find({},function(err,docs){
        if(err){
            res.send(err.message);
        }
        else
        {
            res.send(docs);
        }
    })
})
app.delete('/deletedata/:symbol', function(req,res){
    var symbol = req.params.symbol;
    cryptoDetailsSchema.findOneAndDelete({symbol:symbol}, function(err,docs){
        if(err){
            console.log(err);
        }else{
            return res.json({docs});
        }
    })
})

app.listen(process.env.PORT || 3001, ()=>{
    console.log('server started');
})