const express=require('express');
var app=express();
app.get('/', (req,res)=>{
    res.send({
        name: 'shafi',
        likes: [
            'football',
            'gym'
        ]
    });
});
app.get('/about',(req,res)=>{
    res.send('About Page');

});
app.get('/bad',(req,res)=>{
    errorMessage: 'Unable to handle request'
});app.listen(8000);