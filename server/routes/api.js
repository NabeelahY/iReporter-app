const express = require('express');
const records = require('../database/db');
const router = express.Router();


router.get('/red-flags', function (req, res) {
	res.status(200).json({
		status: res.statusCode,
		data: records
	});
});

router.get('/red-flags/:id', function (req, res) {
	const record = records.find(rec => rec.id ===  parseInt(req.params.id));
	if(!record) res.status(404).send('The record does not exist');

	console.log(record);
	res.status(200).json({
		status: res.statusCode,
		data: record
	});
});

module.exports = router;
