const { execute, execute2 } = require('../helpers/execute.helper');

const createBook = (params, callback) => {

    const newData = [
        params.codigo,
        params.nombre,
        params.edicion,
        params.stock,
        params.editorial_id
    ];

    const query = `INSERT INTO Libro(codigo,nombre,edicion,stock,editorial_id) VALUES(?,?,?,?,?);`;

    return execute(query, newData, callback);
};

const readBook = (callback) => {
    
    const query = `SELECT codigo, nombre, edicion, stock, editorial_id FROM Libro;`;

    return execute2(query, callback);
};

const updateBook = (params, callback) => {

    const newData = [
        params.codigo_nuevo,
        params.nombre,
        params.edicion,
        params.stock,
        params.editorial_id,
        params.codigo_libro
    ];

    const query = `UPDATE Libro SET codigo = ?, nombre = ?, edicion = ?, stock = ?, editorial_id = ? 
                    WHERE codigo = ?;`;

    return execute(query, newData, callback);
};

const deleteBook = (params, callback) => {

    const newData = [
        params.codigo_libro
    ];

    const query = `DELETE FROM Libro 
                    WHERE codigo = ?;`;

    return execute(query, newData, callback);
};

module.exports = { createBook, readBook, updateBook, deleteBook };