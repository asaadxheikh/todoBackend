module.exports = function(app) {

    var location = require('../controllers/location.controller.js');
 
    app.post('/location', location.create);
 
    app.get('/location', location.findAll);

}
