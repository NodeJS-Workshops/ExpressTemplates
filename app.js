const express = require('express');
const config = require('./config/config');
const expressConfig = require('./config/express');

const app = express();
expressConfig(app);

// console.log(process.env.NODE_ENV);
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(config.PORT, () => {
  console.log(`Server is running on PORT ${config.PORT}...`);
});
