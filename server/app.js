const express = require('express');
const app = express();


app.use('/api/v1', require('./routes/api'));

const port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log(`Listening on port ${port}...`);
});
