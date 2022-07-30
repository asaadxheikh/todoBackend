module.exports = function(app) {

    var notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/tasks', notes.create);

    // Retrieve all Notes
    app.get('/tasks', notes.findAll);
    app.put('/tasks/:id', notes.update);

    // Delete a Note with noteId
    app.delete('/tasks/:id', notes.delete);
}