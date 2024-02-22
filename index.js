console.log("Je suis prêt à commencer");

const express = require('express');
const mysql = require('mysql');
const routeur = express.Router();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./.src/config/db.js");


//ACCEUIL
app.get('/', (req, res) => {
    res.send("<h1>Mon premier serveur web f1 sur express !</h1>");
});

//ROUTES CINÉMA
const routesRest = require('./routes/routes_rest.js');
app.use('/api/titres', routesRest);


app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});