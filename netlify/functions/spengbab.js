// const functions = require('firebase-functions');
// const express = require('express')

// let previousUpper = false;

// const spengbab = str => String(str)
//   .trim()
//   .toLowerCase()
//   .split('')
//   .map(char => {
//     if (!/[a-zA-Z]/.test(char)) return char;
//     const newChar = previousUpper ? char.toLowerCase() : char.toUpperCase();
//     previousUpper = !previousUpper;
//     return newChar;
//   }).join('');

// const app = express();

// app.use(express.json());

// app.post('/', (req, res) => {
//   const { body: { text, user_id } } = req
//   if (!text || !text.trim().length) {
//     return res.status(200).send({
//       text: spengbab('I know how to use spengbab\nSend a message, dummy'),
//     });
//   }

//   return res.send({
//     response_type: 'in_channel',
//     blocks: [
//       {
//         type: 'section',
//         text: {
//           type: 'mrkdwn',
//           text: spengbab(text)
//         }
//       },
//       {
//         type: 'context',
//         elements: [
//           {
//             type: 'mrkdwn',
//             text: `- <@${user_id}>`
//           }
//         ]
//       }
//     ]
//   })
// });

// app.get('/', (req, res) => res.send({
//   message: spengbab('What the hell do you want?')
// }))


// exports.spengbab = functions.https.onRequest(app);

const spengbab = str => String(str)
  .trim()
  .toLowerCase()
  .split('')
  .map(char => {
    if (!/[a-zA-Z]/.test(char)) return char;
    const newChar = previousUpper ? char.toLowerCase() : char.toUpperCase();
    previousUpper = !previousUpper;
    return newChar;
  }).join('');

// Initializes your app with your bot token and signing 
exports.handler = async function (event, context) {
  // your server-side functionality
  console.log(event)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: event.body
  };
};

