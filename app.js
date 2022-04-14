const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require ('path');

app.use(express.static('public'));

app.listen(3003, () => {
    console.log('Servidor corre en http://localhost:3003')
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './images/logo-mercado-liebre.svg'))
});



app.get('/register', (req,res) => {
    // console.log('Registro');
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.post('/register', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/login', (req,res) => {
    // console.log('login');
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});

app.post('/login', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});

app.get('/home', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

// app.post('/home', (req,res) => {
//     res.send('Busqueda Exitosa')
// });

