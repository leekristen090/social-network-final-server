const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to my final project server!')});
app.listen(4000);