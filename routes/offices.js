var router = require('express').Router();
var Office = require('../db/office');

router.get('/', function(req,res,next){
    Office.findAll()
        .then(function(result){
            res.render('index', {offices:result})
        }).catch(res.send(err));
})

module.exports = router;