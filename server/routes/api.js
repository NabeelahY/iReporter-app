const express = require('express');
const records = require('../database/db');
const router = express.Router();


router.get('/red-flags', function (req, res) {
	res.status(200).json({
		status: res.statusCode,
		data: records
	});
});

module.exports = router;
