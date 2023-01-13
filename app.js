const { App } = require("@slack/bolt");
require("dotenv").config();

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

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.command("/spengbab", async ({ command, ack, say }) => {
  try {
    await ack();
    say("Yaaay! that command works!");
  } catch (error) {
      console.log("err")
    console.error(error);
  }
});

(async () => {
  const port = 3000
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();