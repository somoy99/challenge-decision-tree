const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes')
const app = express();

app.use(
    cors(),
    bodyParser.json({ 'limit': '1mb' })
);

app.set('port', 3000);


const server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + server.address().port);
});

app.get('/', (req, res) => {
    res.status(200).send('Hi You Reached the API, now REST!');
});

app.use(routes);

module.exports = app;
