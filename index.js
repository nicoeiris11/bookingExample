const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = 3000;
const app = express();
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log('Running on http://%s', port)
});
