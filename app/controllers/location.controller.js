var Location = require('../models/location.model.js');

exports.create = function(req, res) {
    // Create and Save a new Location
    if(!req.body.points) {
        res.status(400).send({message: "location can not be empty"});
    }
    
    var location = new Location({location_name: req.body.location_name, points: req.body.points});

    location.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Location."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Location.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving locations."});
        } else {
            res.send(notes.sort((a,b)=>b.createdAt-a.createdAt));
        }
    });
};

 