require('dotenv').config();
const NeoTrellis = require('adafruit-neotrellis');
const trellis = new NeoTrellis();
const request = require('superagent');

const API_KEY = process.env.API_KEY;

const emojis = [
  '🦄',
  '💻',
  '🤖',
  '🎉',
  '😈',
  '😭',
  '😍',
  '🌮',
  '💩',
  '😴',
  '😂',
  '☕',
  '🔜',
  '⁉️',
  '💯'
];

function rainbowButtons() {
  trellis.changeColor(0, 227, 33, 23);
  trellis.changeColor(1, 249, 38, 33);
  trellis.changeColor(2, 250, 107, 34);
  trellis.changeColor(3, 254, 216, 3);
  trellis.changeColor(4, 255, 251, 1);
  trellis.changeColor(5, 253, 243, 79);
  trellis.changeColor(6, 142, 250, 11);
  trellis.changeColor(7, 59, 210, 20);
  trellis.changeColor(8, 55, 189, 26);
  trellis.changeColor(9, 47, 203, 245);
  trellis.changeColor(10, 26, 154, 246);
  trellis.changeColor(11, 3, 52, 239);
  trellis.changeColor(12, 117, 32, 159);
  trellis.changeColor(13, 124, 91, 218);
  trellis.changeColor(14, 210, 38, 130);
  trellis.changeColor(15, 249, 57, 128);
}

rainbowButtons();

function buttonsOff() {
  console.log('buttons off');
  [...Array(16)].forEach((_, i) => {
    trellis.changeColor(i, 0, 0, 0);
  });
}

function SendEmojis() {
  return request
    .post(`https://alchemypdxbot.herokuapp.com/api/v1/emojis?apiKey=${API_KEY}`)
    .send({ emojiStory })
    .then(res => {
      console.log('AHHHHHH', res.body);
      buttonsOff();
      setTimeout(rainbowButtons, 1000);
    })
    .catch(console.log);
}

let emojiStory = '';

trellis.on('Button15', () => {
  console.log('Button Pressed');
  // wait for the stories to finish sending before clearing the story
  SendEmojis()
    .then(() => emojiStory = '');
});

emojis.forEach((emoji, i) => {
  trellis.on(`Button${i}`, () => emojiStory += emoji)
});
