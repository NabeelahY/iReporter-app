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

router.post('/red-flags', function (req, res) {
	const newRecord = {
		id: records.length + 1,
        createdOn: "January 13th, 2017",
        createdBy: 889,
        type: "Red-flag",
        location: "6.5244 N, 3.3792 E",
        status: "draft",
        comment: "Police harrased me for not giving them bribe"
	};
	records.push(newRecord);
	res.status(200).json({
		status: res.statusCode,
		data: [{
			id: records.length + 1,
			message: 'Created red-flag record'
		}]
		newRecord;
	});
});

module.exports = router;

