// MANIPULATION(model) DE LA BASE DE DONNÉ POUR L'API USERS

//Base de donnée
const db = require('../.src/config/db');

module.exports = {

afficherListeBD: (typeTitre, page, offset) => {
    const query = `SELECT * FROM netflix_titles WHERE show_type = ${typeTitre} LIMIT ?, ?`;
    const value = [page, offset]
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
