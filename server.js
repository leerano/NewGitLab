const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const port = process.env.PORT;


app.use(express.static(path.join(__dirname, 'app')));
app.use(favicon(path.join(__dirname, 'app', 'favicon.ico')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

console.log(`Starting server on port ${port}. Go to http://localhost:${port}`);
app.listen(port);
