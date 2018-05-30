const express =  require('express');
const path = require('path');

let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/f', (req,res) => {
    console.log('ping');
    res.send('ping');   
});

app.listen(4000, () => {
    console.log('listening on 4000');
});