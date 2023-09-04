const editorialModel = require('../models/editorial.model');
const { response } = require('../helpers/response.helper');

const read_editorial = (req, res) => {
    try {
        editorialModel.readEditorial( (err, results) => {
            if (err) return response(res, 400, 'Error al obtener Editoriales.', [err]);
            
            response(res, 200, 'Editoriales obtenidas con éxito.', results);
        });

    } catch (error) {
        return response(res, 400, 'Error al obtener Editoriales.', [error]);
    }
};

module.exports = { read_editorial };