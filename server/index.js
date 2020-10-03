const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(`${__dirname}/../build`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`Server started on: ${PORT}`);
