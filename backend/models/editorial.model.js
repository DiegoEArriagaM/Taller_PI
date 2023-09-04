const { execute2 } = require('../helpers/execute.helper');

const readEditorial = (callback) => {
    
    const query = `SELECT id, nombre, pais, ciudad FROM Editorial;`;

    return execute2(query, callback);
};

module.exports = { readEditorial };