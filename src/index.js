const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();




//mongoose.connect('mongodb+srv://VICTOR:VICTOR@cluster0-wx5d2.mongodb.net/omnisteak?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost:27017/omnisteak', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);
//metodos http: get, delete, put, post
//tipos de parametros:
//query params  request.query(filtros ,ordenação, paginação, ...)
//route params  request.params (indentificar um recurso na alteração, remoção)
//boby request.boby (Dados para criação ou alteração de um registro)



app.listen(3333);