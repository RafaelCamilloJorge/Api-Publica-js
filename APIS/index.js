const express = require('express');

const app = express();

app.listen('3000');

app.use(express.json());

app.route('/').post((req, res) => {
    for(let i = 0; i < 4; i++){
        res.send(`Seu Nome é: ${req.body.pessoas.nome_pessoas[i]} e sua Idade é ${req.body.pessoas.idade_pessoas[i]}`);
    }
})