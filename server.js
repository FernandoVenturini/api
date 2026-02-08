// IMPORTANDO EXPRESS:
import express from 'express';

// CRIANDO A APLICAÇÃO EXPRESS:
const app = express();
app.use(express.json()); // HABILITANDO O PARSE DE JSON PARA AS REQUISIÇÕES RECEBIDAS

// DEFININDO A PORTA:
const PORT = 3000;

// CRIANDO USUARIOS DE EXEMPLO:
const users = [];

app.post('/users', (req, res) => {
    //console.log(req.body); // LOGANDO OS DADOS RECEBIDOS DO CLIENTE
    users.push(req.body); // ADICIONANDO OS DADOS RECEBIDOS AO ARRAY DE USUARIOS
    res.status(201).json(req.body); // RESPONDENDO COM UMA MENSAGEM DE SUCESSO
});

// DEFININDO UMA ROTA PARA O ENDPOINT RAIZ:
app.get('/users', (req, res) => { 
    res.status(200).json(users); // RESPONDENDO COM O ARRAY DE USUARIOS EM FORMATO JSON
});


// INICIANDO O SERVIDOR NA PORTA 3000:
app.listen(PORT, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}!`); // LOGANDO UMA MENSAGEM QUANDO O SERVIDOR ESTIVER PRONTO
});

