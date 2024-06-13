const express = require('express');
var cors = require('cors')
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3333;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }

app.set('view engine', 'ejs');
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
    // res.sendFile(path.join(__dirname, 'public', 'img01.png'));
});

app.get('/urls', (req, res) => {
    const files = [];
    fs.readdir(path.join(__dirname, 'public'), (error, files) => {
        if(error) {
            res.send([]);      
        }else{
            res.send(files);
        }
    })
});

const authorization = 'Basic V2lsbGlhbU9saXZlaXJhOldPMTIzNA==';
app.post('/baterry', (req, res) => {
    const { cabineId } = req.body;
    const _cabineId = (cabineId + '').toString().trim();
    console.log('cabineId');
    console.log(_cabineId);
    console.log(req.body);
    const options = {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'User-Agent': 'insomnia/9.2.0',
            Authorization: authorization
        }
    };
    
    fetch(`https://developer.chargenow.top/cdb-open-api/v1/rent/order/create?deviceId=${_cabineId}&callbackURL=https%3A%2F%2Ftrumunus-api-61df450d16d7.herokuapp.com%2F`, options)
        .then(response => response.json())
        .then(response => res.send(response))
        .catch(err => res.send(err));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor estático rodando em http://localhost:${PORT}`);
});