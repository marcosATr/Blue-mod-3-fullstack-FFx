const express = require("express");
const router = express.Router();

const personagens = [
  "Burj Khalifa",
  "Shanghai Tower",
  "Abraj Al Bait",
  "ing An Finance Centre",
  "Lotte World Tower",
];

router.get("/", (req, res) => {
  res.send("Bem-vindo");
});

router.get("/personagem", (req, res) => {
  res.send(personagens);
});

router.get("/personagem/:id", (req, res) => {
  const id = req.params.id - 1;
  const personagem = personagens[id];
  if (!personagem) {
    return res.status(404).send("Página não encontrada.");
  }
  res.send(personagem);
});


router.post("/personagem", (req, res) => {
  const personagem = req.body.personagem;
  const id = personagens.length;
  personagens.push(personagem);
});

router.put("/personagem/:id", (req, res) => {
  const id = req.params.id - 1;
  const personagem = req.body.personagem;
  const personagemAnterior = personagens[id]
  personagens[id] = personagem;
  res.send(`<b>${personagemAnterior}</b> foi atualizado para <b>${personagem}</b>.`);
});

router.delete("/personagem/:id", (req, res) => {
  const id = req.params.id - 1;
  personagens.pop(id)
  res.send(`<b>${id+1}</b> removido com sucesso.`)
});

module.exports = routes;
