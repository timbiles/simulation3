require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const path = require('path');
const port = 3005;

const { addUser, getUser, getUsers } = require('./userCtrl');
const { getPosts, addPost } = require('./postCtrl');

const app = express();
app.use(bodyParser.json());

/// build
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 7 * 2
    }
  })
);

//--------- user endpoints ---------//
app.post('/api/user', addUser);
app.post('/api/get_user', getUser);
app.get('/api/users', getUsers);

app.get('/api/posts', getPosts);
app.post('/api/new-post', addPost)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
