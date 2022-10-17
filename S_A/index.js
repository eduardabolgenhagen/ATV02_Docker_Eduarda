const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./router');

app.use(express.json());
app.use('/api', route);
app.listen(port, () => console.log('Porta', port));

app.get('/', (req, res) => { res.send("Server rodando") });