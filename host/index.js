const express = require('express');
const path = require('path');
const app = express();
const port = process.argv[2];

app.use('/dist', express.static(path.join(__dirname, '../dist/')));
app.listen(port, () => console.log(`Listening on port ${port}...`));