const express=require('express');

const app=express();

app.set('view engine', 'ejs');
app.listen(3000);
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.render('Index');
});

app.get("/level",(req,res)=>{
    res.render('level');
});

app.get("/easy",(req,res)=>{
    res.render('easy');
});
app.get("/intermediate",(req,res)=>{
    res.render('intermediate');
});
app.get("/endeasy",(req,res)=>{
    res.render('endeasy');
});
app.get("/advance",(req,res)=>{
    res.render('advance');
});

