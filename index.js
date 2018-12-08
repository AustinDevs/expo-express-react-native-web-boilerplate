const { resolve, join } = require('path');
const express = require('express');
const passport = require('passport');
const { urlencoded, json } = require('body-parser');
const https = require('https');
const morgan = require('morgan');
const { existsSync, readFileSync } = require('fs');
if (existsSync(resolve('.env'))) require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(join(__dirname, 'build')));

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(passport.initialize());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  if (process.env.HTTPS === 'true') {
    https.createServer({
      key: readFileSync('localhost.key'),
      cert: readFileSync('localhost.crt')
    }, app).listen(port, () => {
      console.log('API Server Started On Port %d', port); // eslint-disable-line
    });
  } else {
    app.listen(port, () => {
      console.log('API Server Started On Port %d', port); // eslint-disable-line
    });
  }
} else {
  app.use(morgan('combined'));
  app.listen(port);
}

app.use('/api/users/', require('./routes/users'));
app.use('/auth/', require('./routes/auth'));
app.use('/', require('./routes'));
