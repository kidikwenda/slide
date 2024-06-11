const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img01.png'));
});

app.get('/urls', (req, res) => {
    res.send([
        'tis.mp4', 'tis.png'
    ])
});

app.get('/send', (req, res) => {
    res.send([
        'tis.mp4', 'tis.png'
    ])
});


app.listen(PORT, () => {
    console.log(`Servidor estático rodando em http://localhost:${PORT}`);
});
