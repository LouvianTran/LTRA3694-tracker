// From tutorial week 7:
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', function(req, res) {
    // res.sendFile(__dirname + '/public/index.html') remove in week 8
    res.sendFile(__dirname + '/dist/index.html')
   })

let server = app.listen(8888, function(){
console.log("App server is running on port 8888");
});

//Tutorial week 8
app.use(express.static(__dirname + '/dist'));