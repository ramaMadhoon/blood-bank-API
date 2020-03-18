const connection = require('../database/db_connection');

const sql = 'select * from donors';

const Donors = (callback) => {
    connection.query(sql, (err, res) => {
        if (err) throw err;
        else {
            callback(err, res.rows);
        }
    });
};

module.exports = Donors;