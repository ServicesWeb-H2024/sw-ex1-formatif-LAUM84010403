// CODAGE(controlleurs) DE L'API REST

//appel des manipulation de la base de donnée
const model = require('../models/rest.model');

module.exports = {

    afficherListe: (req, res) => {

        // Vérifie si le type de titre est valide
        if (req.params.type_titre !== 'film' && req.params.type_titre !== 'serie') {
            return res.status(400).json({ error: `Le type '${typeTitre}' est invalide, nos seul choix actuel sont [film] et [serie]` });
        }

        if (req.params.type_titre == 'film') {
            typeTitre = "Movie";
        }
        if (req.params.type_titre == 'serie') {
            typeTitre = "TV Show";
        }

        const page = parseInt(req.query.page)

        const limit = 10;
        const offset = (page - 1) * limit;

        model.afficherListeBD(typeTitre, offset)
        .then(result => {
            res.status(200).json({
                result: result,
                filtre: req.params.type_titre,
                page: page,
                url_page_suivante: "/api/titres/" + req.params.type_titre + "?page=" + (page + 1)
            });
        })
            .catch(error => {
                console.error('Erreur lors de la récupération des film :', error);
                res.status(500).json({ error: 'Erreur serveur' });
            });
    },

};

