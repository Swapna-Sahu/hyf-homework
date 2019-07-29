'use strict';

const sql = require('./../../../db');
// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

function handleError(res, error) {
    res.status(500);
    res.end(JSON.stringify({
        message: "A SQL error occurred.",
        error: error.sqlMessage
    }));
}


router.get('/test', (req, res, next) => {
    // body requests
    console.log(req.body);
    // query parameters
    console.log(req.query);
    sql.query(`SELECT * FROM \`database-node-api\`.users;`, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


router.post('/', (req, res, next) => {
    // Create the sql that inserts a new user into the database. The data is gotten from the req.body
    // Find the fields from the database-node-api.sql
    // body requests
    console.log(req.body);
    // query parameters
    console.log(req.query);
    sql.query(`INSERT INTO \`database-node-api\`.users (name, email,password,time,age,country) VALUES(?,?,?,?,?,?);`, [req.body.name, req.body.email,req.body.password,req.body.time,req.body.age], function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });

});


 router.get('/', (req, res, next) => {
    // Create the sql that returns all users
    console.log(req.params);
    // query parameters
    console.log(req.query);
    for (const key in req.query) {
		// api/users?country=denmark should return users that come from denmark
		if (key == 'country') {
			let msql = `SELECT * FROM users WHERE country = '${req.query[key]}'`;
			sql.query(msql, (err, result) => {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		} else if (key == 'age') {
			//api/users?age=31 should return users that are 31
			let msql = `SELECT * FROM users WHERE age = ${parseInt(req.query[key])}`;
			sql.query(msql, (err, result) => {
				console.log('this is my sql-query', msql);
				if (err) throw err;
				res.send(result);
			});
		} else if (key == 'sort' && 'order') {
			// api/users?sort=name&order=asc should return users sorted after the sort query parameter should be ordered after the order query parameter
			let keys = Object.keys(req.query);
			let msql = `SELECT name FROM users
			ORDER BY '${keys[0]}' '${keys[1]}'`;
			sql.query(msql, (err, result) => {
				if (err) throw err;
				res.send(result);
			});
		} else if (key == 'min-age' && 'max-age') {
			// api/users?min-age=29&max-age=31 should return users that are between 29 and 31
			let keysValue = Object.values(req.query);
			let msql = `SELECT * FROM users WHERE age BETWEEN ${keysValue[0]} AND ${keysValue[1]};`;
			sql.query(msql, (err, result) => {
				if (err) throw err;
				res.send(result);
			});
		}
	}
});



router.get('/:email', (req, res, next) => {
    // get the email after api/users/some-email
    console.log(req.params.email)
    // Create the sql that returns a specific user matching the email
    let emailquery = req.params.email;
    sql.query(`SELECT email FROM \`database-node-api\`.users WHERE email = ${req.params.email}`, function (error, result) {
        console.log(result);
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


router.put('/:email', (req, res, next) => {
    // Create the sql that updates information about a user matching the email
    //console.log(req.params.email)
    console.log(req.body)
    // Create the sql that returns a specific user matching the email
    let emailquery = req.params.email;
    sql.query(`UPDATE * FROM \`database-node-api\`.users 
    SET age= ?
    WHERE email = ${emailquery}`,[31,req.body.email], function (error, result) {
    res.setHeader('Content-Type', 'application/json');
    if (error) return handleError(res, error);
    res.send(res.affectedRows + 'records updated');
    res.end(JSON.stringify(result));
    });
});


router.delete('/:email', (req, res, next) => {
    // Create the sql that removes the user matching the email
    let emailquery = req.params.email;
    sql.query(`DELETE * FROM \`database-node-api\`.users WHERE email = ${emailquery}`, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


module.exports = router;
