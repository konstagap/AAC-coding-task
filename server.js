const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
console.log('Current mode is', process.env.Node_ENV);
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/view/index.html'))
);

app.listen(port, () => console.log(`listening on port ${port}!`));
