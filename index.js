const express = require('express');
const config = require('./config');
const helloRoute = require('./routes/hello');

const app = express();

app.use('/', helloRoute);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
