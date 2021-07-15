const express = require("express");
const app = express();
port = 4000;

app.use(express.json());

const skyscrapers = [
  "Burj Khalifa",
  "Shanghai Tower",
  "Abraj Al Bait",
  "ing An Finance Centre",
  "Lotte World Tower",
];

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/skyscraper", (req, res) => {
  res.send(skyscrapers);
});

app.get("/skyscraper/:id", (req, res) => {
  const id = req.params.id - 1;
  const skyscraper = skyscrapers[id];
  if (!skyscraper) {
    return res.status(404).send("deu ruim!");
  }
  res.send(skyscraper);
});

//parte 2

app.post("/skyscraper", (req, res) => {
  const skyscraper = req.body.skyscraper;
  const id = skyscrapers.length;
  skyscrapers.push(skyscraper);
});

//put // /filmes/id
app.put("/skyscraper/:id", (req, res) => {
  const id = req.params.id - 1;
  const skyscraper = req.body.skyscraper;
  skyscrapers[id] = skyscraper;
  res.send(`${skyscraper} atualizado.`);
});

app.delete("/skyscraper/:id", (req, res) => {
  const id = req.params.id - 1;
  delete skyscrapers[id];
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
