const express = require('express');

const port = 80;
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
