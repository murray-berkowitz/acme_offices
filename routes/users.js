var router = require('express').Router();
var User = require('../db/user');

router.post('/',function(req,res,next){
    var data = req.body.user;
    User.create({
        name: data
    }).then(function(result){
        return res.send(result)
    })
})

router.get('/', function(req,res,next){
    User.findAll({})
        .then(function(result){
            return res.send(result);
        })
})

router.delete('/:id',function(req,res,next){
    var user = req.params.id;
    User.destroy({
        where: {
            id: user
        }
    })
     .then(function(result){
         return res.send(result);
     })
})


module.exports = router;