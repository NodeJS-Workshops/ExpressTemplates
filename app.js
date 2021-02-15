const express = require('express');
const config = require('./config/config');

const app = express();

// console.log(process.env.NODE_ENV);

app.listen(config.PORT, () => {
	console.log(`Server is running on PORT ${config.PORT}...`);
});
