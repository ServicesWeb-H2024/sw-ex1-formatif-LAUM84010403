// CODAGE(controlleurs) DE L'API REST

//appel des manipulation de la base de donnée
const model = require('../models/rest.model');

module.exports = {

    afficherListe: (req, res) => {
        const typeTitre = req.params.type_titre;
        const page = req.query.page;
        const limit = 10;
        const offset = (page) * limit;

        if (typeTitre !== 'film' && typeTitre !== 'serie') {
            return res.status(400).json({ error: `Le type '${typeTitre}' est invalide` });
        }

        // Vérifie si le type de titre est valide
        if (typeTitre !== 'film' && typeTitre !== 'serie') {
            return res.status(400).json({ error: `Le type '${typeTitre}' est invalide` });
        }

        model.afficherListeBD(typeTitre, page, offset)


        model.afficherListeBD()
        .then(result => {
            res.send(result);
        })
            .catch(error => {
                console.error('Erreur lors de la récupération des film :', error);
                res.status(500).json({ error: 'Erreur serveur' });
            });
    },

};

