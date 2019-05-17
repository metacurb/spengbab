const express = require('express')
const PORT = process.env.PORT || 5000

const spengbab = str => str.split('').map(char => ((Math.random() < 0.5) ? char.toUpperCase() : char)).join('');

express()
  .use(express.json())
  .post('/babify', (req, res) => {
    console.log(req.body);
    if (!req.body.text || !req.body.text.length) {
      console.log('No body text')
      return res.status(500).send({ response_type: 'ephemeral', text: 'Send a message, dummy' });
    }

    res.send({ response_type: 'in_channel', text: spengbab(req.body.text) });
  })
  .get('/', (req, res) => res.send({ message: spengbab('What the hell do you want?') }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))