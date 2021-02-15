const express = require('express');

const app = express();

console.log(process.env.NODE_ENV);

app.listen(5000);
