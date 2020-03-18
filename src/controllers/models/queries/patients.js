const connection = require('../database/db_connection');

const sql = 'select * from patients';

const Patients = (callback) => {
    connection.query(sql, (err, res) => {
        if (err) throw err;
        else {
            callback(err, res.rows);
        }
    });
};

module.exports = Patients;