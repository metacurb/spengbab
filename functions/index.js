const functions = require('firebase-functions');
const express = require('express')

const spengbab = str => str.split('').map(char => ((Math.random() < 0.5) ? char.toUpperCase() : char)).join('');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  if (!req.body.text || !req.body.text.trim().length) {
    return res.status(200).send({
      response_type: 'ephemeral',
      text: spengbab('I know how to use spengbab\nSend a message, dummy'),
    });
  }

  return res.send({
    response_type: 'in_channel',
    text: spengbab(req.body.text),
  });
});

app.get('/', (req, res) => res.send({
  message: spengbab('What the hell do you want?')
}))


exports.spengbab = functions.https.onRequest(app);