const express = require('express');
const {response} = require('express');
const bodyParser = require('body-parser');
const app =express();
const port = 5016;

app.set("view engine","ejs");
app.use(express.static('public'));
app.get('/index',(req,res)=>{
    console.log(req.query.user)
    fetch(`https://api.github.com/users/${req.query.user}`).then(function(response){
        console.log(response);
        return response.json();
      }).then(data=>{
        console.log(data)
        res.render('index',{data});   
      }).catch((err)=>{
          console.log('err');
      }).finally(()=>{
          console.log('api calling finished');
      })
})
app.listen(port,()=>{
    console.log(`server up on ${port}`)
})