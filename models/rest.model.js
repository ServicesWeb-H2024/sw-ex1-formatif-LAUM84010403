// MANIPULATION(model) DE LA BASE DE DONNÉ POUR L'API USERS

//Base de donnée
const db = require('../.src/config/db');

module.exports = {

    //OBTIENT ET RETOURNE ENSUITE UN CERTAINS NOMBRE DE RÉSULTAT
afficherListeBD: (typeTitre, offset) => {
    const query = `SELECT show_id, title FROM netflix_titles WHERE show_type = ? ORDER BY show_id LIMIT 10 OFFSET ?`;
    const value = [typeTitre, offset]
        return new Promise((resolve, reject) => {
            db.query(query, value, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
},

};
