const express = require("express");
const router = express.Router();

const personagens = [
  "Yuna",
  "Tidus",
  "Auron",
  "Kimahri Ronso",
  "Wakka",
  "Lulu",
  "Rikku",
  "Seymour Guado",
  "Sin",
  "Yu Yevon",
  "Belgemine",
  "Lord Braska",
  "Dona",
  "Lord Gandof",
  "Lady Ginnem",
  "Isaaru",
  "Lord Ohalland",
  "Lady Yocun"
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
    return res.status(404).send(`Personagem <b>${id+1}</b> não encontrado.`);
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
  if (!personagemAnterior) {
      res.status(404).send(`Personagem <b>${id+1}</b> não encontrado.`);
  }
  personagens[id] = personagem;
  res.send(`<b>${personagemAnterior}</b> foi atualizado para <b>${personagem}</b>.`);
});

router.delete("/personagem/:id", (req, res) => {
  const id = req.params.id - 1;
  if (id > personagens.length) {
      res.send(`Personagem <b>${id+1}</b> não encontrado.`)
  }
  personagens.pop(id)
  res.send(`<b>${id+1}</b> removido com sucesso.`)
});

module.exports = router;
