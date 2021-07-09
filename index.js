const express = require('express');
const app = express();

const router = require('./api/router/router');

app.use(express.json());
app.use(router);

app.listen(3000, function() {
    console.log("Server is running.");
});