require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const port = 3005;

const { addUser, getUser } = require('./userCtrl');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

//--------- user endpoints ---------//
app.post('/api/users', addUser);
app.get('/api/users', getUser);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
