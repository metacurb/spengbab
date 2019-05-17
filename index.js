const express = require('express');
const PORT = 3002;
const app = express();

const spengbab = str => str.split('').map(char => ((Math.random() < 0.5) ? char.toUpperCase() : char)).join('');

app.use(express.json());

app.post('/', (req, res) => {
  console.log(req);
  if (!req.body.text || !req.body.text.length) {
    res.status(500).send({ response_type: 'ephemeral', text: 'Send a message, dummy' });
    return;
  }

  res.send({ response_type: 'in_channel', text: spengbab(req.body.text) });
});

const server = app.listen(PORT, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});