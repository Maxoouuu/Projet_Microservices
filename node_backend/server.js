const express = require('express');
const app = express();
const { Client } = require('@elastic/elasticsearch');

// Création d'un client Elasticsearch et connexion au service Elasticsearch
const client = new Client({ node: 'http://elasticsearch:9200' });

app.get('/', (req, res, next) => {
  res.status(200).send('Congratulations! We are running node HTTP server!');
});

// Route pour récupérer les couleurs et les envoyer au client
app.get('/colors', (req, res, next) => {
    let colors = ["blue", "yellow", "red"];
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(JSON.stringify(colors));
});

// Route pour indexer une couleur dans Elasticsearch
app.post('/index/color', async (req, res, next) => {
    // Exemple de body requis : { "color": "blue" }
    try {
        const color = req.body.color; // Assurez-vous que le body-parser est configuré pour analyser le JSON
        const response = await client.index({
            index: 'colors',
            body: {
                color: color
            }
        });
        res.status(200).send(`Color indexed: ${color}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Route pour rechercher des couleurs dans Elasticsearch
app.get('/search', async (req, res, next) => {
    try {
        const { color } = req.query;
        const { body } = await client.search({
            index: 'colors',
            body: {
                query: {
                    match: { color: color }
                }
            }
        });
        res.status(200).json(body.hits.hits);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Démarrage du serveur
let port = 8081;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
