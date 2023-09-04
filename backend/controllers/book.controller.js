const bookModel = require('../models/book.model');
const { response } = require('../helpers/response.helper');

const create_book = (req, res) => {
    try {
        bookModel.createBook(req.body, (err, results) => {
            if (err) return response(res, 400, 'Error al guardar Libro.', [err]);

            response(res, 200, 'Libro guardado con éxito.', results);
        });

    } catch (error) {
        return response(res, 400, 'Error al guardar Libro.', [error]);
    }
};

const read_book = (req, res) => {
    try {
        bookModel.readBook( (err, results) => {
            if (err) return response(res, 400, 'Error al obtener Libros.', [err]);
            
            response(res, 200, 'Libros obtenidos con éxito.', results);
        });

    } catch (error) {
        return response(res, 400, 'Error al obtener Libros.', [error]);
    }
};

const update_book = (req, res) => {
    try {
        bookModel.updateBook(req.body, (err, results) => {
            if (err) return response(res, 400, 'Error al actualizar Libro.', [err]);

            response(res, 200, 'Libro actualizado con éxito.', results);
        });

    } catch (error) {
        return response(res, 400, 'Error al actualizar Libro.', [error]);
    }
};

const delete_book = (req, res) => {
    try {
        bookModel.deleteBook(req.body, (err, results) => {
            if (err) return response(res, 400, 'Error al eliminar Libro.', [err]);

            response(res, 200, 'Libro eliminado con éxito.', results);
        });

    } catch (error) {
        return response(res, 400, 'Error al eliminar Libro.', [error]);
    }
};

module.exports = { create_book, read_book, update_book, delete_book };