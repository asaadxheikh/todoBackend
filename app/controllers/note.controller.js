var Note = require('../models/note.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.title||!req.body.date) {
        res.status(400).send({message: "Tasks can not be incomplete"});
        return
    }

    var note = new Note({title: req.body.title , status: 'incomplete',date:req.body.date});

    note.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Task."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Note.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving tasks."});
        } else {
            res.send(notes);
        }
    });
};


exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Note.findById(req.params.id, function(err, note) {
        if(err) {
            res.status(500).send({message: "Could not find a task with id " + req.params.noteId});
        }
 
        note.status = 'complete';

        note.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update task with id " + req.params.noteId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Note.remove({_id: req.params.id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete task with id " + req.params.id});
        } else {
            res.send({message: "task deleted successfully!"})
        }
    });
};
 
 
 

