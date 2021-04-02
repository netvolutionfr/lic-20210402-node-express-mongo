const express = require('express');
const mongoose = require('mongoose');
const Livres = require('./livres');
const bodyParser = require("body-parser");
mongoose.connect('mongodb://localhost:27017/livres', {useNewUrlParser: true, useUnifiedTopology: true});

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8088;

app.get('/', async (req, res) => {
    const livres = await Livres.find();
    await res.json(livres);
});

app.post('/', async (req, res) => {
    const titre = req.body.titre;
    const auteur = req.body.auteur;
    const genre = req.body.genre;

    if (!titre || !auteur || !genre) {
        res.send('Il manque un argument');
        return;
    }

    const nouveau_livre = new Livres({
        titre: titre,
        auteur: auteur,
        genre: genre
    });

    await nouveau_livre.save();
    res.json(nouveau_livre);
});

app.get('/:id', async (req, res) => {
   const id = req.params.id;
   const livre = await Livres.findById(id);
   await res.json(livre);
});

app.listen(port, () => {
    console.log('Serveur fonctionne');
});
