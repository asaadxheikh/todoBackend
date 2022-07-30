var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    title: String,
    status: String,
    date:Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', NoteSchema);
