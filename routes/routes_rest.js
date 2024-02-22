//ROUTES DE l'API REST

//configuration
const express = require('express');
const mysql = require('mysql');
const routeur = express.Router();
const app = express();

//controlleurs USERS
const controller = require('../controlleurs/rest.controlleur');


//PAGE D'ACCEUIL DE /api/titres

routeur.get('/:type_titre', controller.afficherListe);

module.exports = routeur;
