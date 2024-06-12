const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3333;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
    // res.sendFile(path.join(__dirname, 'public', 'img01.png'));
});

app.get('/urls', (req, res) => {
    const files = [];
    fs.readdir(path.join(__dirname, 'public'), (error, file) => {
        res.send(file);
    })
    // res.send([])
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor estático rodando em http://localhost:${PORT}`);
});
