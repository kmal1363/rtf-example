const express = require('express');
const path = require('path');
const app = express();

var staticPath = path.join(__dirname, '../front/build');
app.use(express.static(staticPath));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});