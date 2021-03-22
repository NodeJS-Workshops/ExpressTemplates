const mongoose = require('mongoose');

const CubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
    minlength: 10
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Cube', CubeSchema);
