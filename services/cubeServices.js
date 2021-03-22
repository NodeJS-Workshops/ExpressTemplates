const Cube = require('../models/Cube');

async function createCube(data) {
  const { name, description, imageUrl, difficulty } = data;
  const cube = new Cube({
    name,
    description,
    imageUrl,
    difficulty
  });

  await cube.save();
}

module.exports = {
  createCube
};
