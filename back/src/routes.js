//dependencias para funcionar

const express = require('express')
const router = express.Router();

const tarefas = require('./controll/tarefas')


// rota (endpoint) de teste 

const teste = (req, res)=>{
    res.json("API respondendo com sucesso!");
}

router.get('/',teste);
router.post('/tarefas',tarefas.create);
router.get('/tarefas', tarefas.read);

module.exports = router; 



