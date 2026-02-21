// IMPORTANDO EXPRESS:
import express from "express";

// IMPORTANDO PRISMA CLIENT
import pkg from "@prisma/client";

// VARIAVEL PRISMA CLIENT
const { PrismaClient } = pkg;
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

// IMPORTANDO PRISMA CLIENT
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// CRIANDO A APLICAÇÃO EXPRESS:
const app = express();
app.use(express.json()); // HABILITANDO O PARSE DE JSON PARA AS REQUISIÇÕES RECEBIDAS

// DEFININDO A PORTA:
const PORT = 3000;

// CRIANDO USUARIOS DE EXEMPLO:
const users = [];

<<<<<<< HEAD
app.post('/users', (req, res) => {
    //console.log(req.body); // LOGANDO OS DADOS RECEBIDOS DO CLIENTE
    //users.push(req.body); // ADICIONANDO OS DADOS RECEBIDOS AO ARRAY DE USUARIOS
    prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    res.status(201).json(req.body); // RESPONDENDO COM UMA MENSAGEM DE SUCESSO
=======
app.post("/users", async (req, res) => {
  //console.log(req.body); // LOGANDO OS DADOS RECEBIDOS DO CLIENTE
  //users.push(req.body); // ADICIONANDO OS DADOS RECEBIDOS AO ARRAY DE USUARIOS
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(user); // RESPONDENDO COM UMA MENSAGEM DE SUCESSO
>>>>>>> 494b39f423fd8e14f0a020b6d25199a65eb3015b
});

// DEFININDO UMA ROTA PARA O ENDPOINT RAIZ:
app.get("/users", (req, res) => {
  res.status(200).json(users); // RESPONDENDO COM O ARRAY DE USUARIOS EM FORMATO JSON
});

// INICIANDO O SERVIDOR NA PORTA 3000:
app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}!`); // LOGANDO UMA MENSAGEM QUANDO O SERVIDOR ESTIVER PRONTO
});
