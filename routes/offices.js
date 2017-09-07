var router = require('express').Router();
var Office = require('../db/office');

router.get('/', function(req,res,next){
    Office.findAll()
    .then(function(result){
        return res.send(result);
    })
})

router.post('/',function(req,res,next){
    Office.create({
        name:req.body.name,
        lat:req.body.lat,
        lng:req.body.lng
    })
    .then(function(result){
        res.send(result);
    })
})

module.exports = router;