const functions = require('firebase-functions');
const express = require('express')

let previousUpper = false;

const spengbab = str => str
  .split('')
  .map(char => {
    if (!/[a-zA-Z]/.test(char)) return char;
    const newChar = previousUpper ? char.toLowerCase() : char.toUpperCase();
    previousUpper = !previousUpper;
    return newChar;
  }).join('');

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
    text: spengbab(req.body.text.toLowerCase()),
  });
});

app.get('/', (req, res) => res.send({
  message: spengbab('What the hell do you want?')
}))


exports.spengbab = functions.https.onRequest(app);