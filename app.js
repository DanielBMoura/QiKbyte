var express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (req, res) {
    var cursos = [{ descricao: 'Lógica de Programação', ch: 40},
        {descricao: 'JavaScript', ch: 40},
        {descricao: 'Banco de Dados', ch:40},
        {descricao: 'NodeJS', ch: 20}
    ]
    res.render('pages/index', {
        cursos: cursos
    })
})

app.get('/sobre', function(req, res) {
    res.render('pages/sobre')
})

app.get('/cadastro', function(req, res) {
    res.render('pages/cadastro')
})

app.get('/galeria', function(req, res) {
    res.render('pages/galeria')
})

app.listen(3000)
console.log('Rodando na porta 3000')