const express = require('express');
const app = express();


const routes = require("../api/routes/index");


app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`✅ App listening on port ${PORT}!`)
});