const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const index = require('./routes/index');


const app = express();

// port
const port = process.env.PORT || 3000;

// log request to console
app.use(logger('dev'));

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/', index);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

module.exports = app;
