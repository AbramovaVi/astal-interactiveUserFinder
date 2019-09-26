const { join } = require('path');
const express = require('express');

const { users } = require('./data.js');
const { getUsers } = require('./utils');

const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});



app.get('/users', (req, res) => {
    console.log(req.query);

    const { firstName } = req.query;

    const data = getUsers(users, firstName);
    console.log(data);

    res.send(data);
});

app.listen(4000, () => console.log('port 4000'));
