const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://mayconliborio:100por100@maycon-ocp4g.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

//Métodos HTTPS:
// GET pegar/receber informaçao / listar usuarios, produtos, etx
// POST criar informação / salvar produto, usuario, etc
// PUT editar informaçao / editar produto, usuario, etc
// DELETE deletar informaçao / deletar produto, usuario, etc

// Tipos de parâmetros:
// Query Params: request.query   (Buscar com algum Filtro de forma Publica no proprio endereço(link), ordenar, paginar, ...)
// Route Params: request.params  (Identificar um recurso na alteração ou remoção)
// Body: requst.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)




