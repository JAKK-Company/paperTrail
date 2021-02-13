
const { User, Category, Item } = require('./models');


const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',
  (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
  });

app.get('/build/bundle.js',
  (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js'));
  });

app.listen(PORT, () => console.log('Listening on port 3000...'));
