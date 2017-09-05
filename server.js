var express = require('express');
var app = express();
var urlencoded = require('body-parser').urlencoded({extended:false});
var nunjucks = require('nunjucks');
var port = process.env.PORT || 3000;
var db = require('./db');
var userRoute = require('./routes/users');
var officeRoute = require('./routes/offices');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});

db.sync()
    .then(function(){
        app.listen(port,function(){
            console.log(`listening on port ${port}`);
        })
    })
    .catch(console.error);

app.use(function(err,req,res,next){
    res.rendor('error',{err})
})

app.use(require('method-override')('_method'));
app.use(urlencoded);
app.use('/users', userRoute);
app.use('/office', officeRoute);
app.use(express.static('public'));