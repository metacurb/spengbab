const querystring = require('node:querystring');
const axios = require('axios');

const spengbab = str => String(str)
  .trim()
  .toLowerCase()
  .split('')
  .reduce((acc, char) => {
    const newUpper = !acc.previousUpper
    if (!/[a-zA-Z]/.test(char)) return { previousUpper: newUpper, word: `${acc.word}${char}` }
    const newChar = newUpper ? char.toLowerCase() : char.toUpperCase();
    return { previousUpper: newUpper, word: `${acc.word}${newChar}` }
  }, { previousUpper: false, word: '' }).word;

exports.handler = async function (event, context) {
  const { channel_id, text, user_id } = querystring.parse(event.body)

  if (!text || !text.trim().length) {
    return {
      statusCode: 200,
      body: spengbab('I know how to use spengbab\nSend a message, dummy'),
    }
  }

  console.log(event)

  const payload = {
    statusCode: 200,
		headers: {
			'Content-type': 'application/json',
		},
    body: JSON.stringify({
      response_type: 'in_channel',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: spengbab(text)
          }
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `- <@${user_id}>`
            }
          ]
        }
      ]
    })
  }

  // await axios.post('https://slack.com/api/chat.delete', {
  //   channel: channel_id,
  //   "ts": "MESSAGE_TO_DELETE"
  // })

  return payload;
};

