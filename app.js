const express = require('express');
const config = require('./config/config');
const expressConfig = require('./config/express');
const routes = require('./routes');
const dbConfig = require('./config/db');

const app = express();
expressConfig(app);
dbConfig();

app.use(routes);

app.listen(config.PORT, () => {
  console.log(`Server is running on PORT ${config.PORT}...`);
});
