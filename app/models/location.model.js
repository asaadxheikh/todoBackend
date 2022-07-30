var mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
  location_name: {
      type: String
  },
  points: {   type: [Number],   default: [0,0]} ,

}, {
    timestamps: true
});

LocationSchema.index({ "points": "2dsphere" });

module.exports = mongoose.model('Previous_Locations', LocationSchema);
