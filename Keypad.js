const NeoTrellis = require('adafruit-neotrellis');
const trellis = new NeoTrellis();
const request = require('superagent');

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
  [...Array(16)].forEach((i) => {
    trellis.changeColor(i, 0, 0, 0);
  });
}

function SendEmojis() {
  return request
    .post('https://alchemypdxbot.herokuapp.com/api/v1/emojis')
    .send({ emojiStory })
    .then(res => {
      console.log('AHHHHHH', res.body);
      buttonsOff();
    })
    .catch(console.log);
}

let emojiStory = '';
 
trellis.on('Button15', () => {
  console.log('Button Pressed');
  SendEmojis();
  emojiStory = '';
});

trellis.on('Button0', () => {
  const party = '🦄';
  emojiStory += party;
});

trellis.on('Button1', () => {
  const laptop = '💻';
  emojiStory += laptop;
});

trellis.on('Button2', () => {
  const robot = '🤖';
  emojiStory += robot;
});

trellis.on('Button3', () => {
  const party = '🎉';
  emojiStory += party;
});

trellis.on('Button4', () => {
  const devil = '😈';
  emojiStory += devil;
});

trellis.on('Button5', () => {
  const cry = '😭';
  emojiStory += cry;
});
 
trellis.on('Button6', () => {
  const heartEyes = '😍';
  emojiStory += heartEyes;
});

trellis.on('Button7', () => {
  const taco = '🌮';
  emojiStory += taco;
});

trellis.on('Button8', () => {
  const poop = '💩';
  emojiStory += poop;
});

trellis.on('Button9', () => {
  const sleep = '😴';
  emojiStory += sleep;
});

trellis.on('Button10', () => {
  const laugh = '😂';
  emojiStory += laugh;
});

trellis.on('Button11', () => {
  const coffee = '☕';
  emojiStory += coffee;
});

trellis.on('Button12', () => {
  const soon = '🔜';
  emojiStory += soon;
});

trellis.on('Button13', () => {
  const interrobang = '⁉️';
  emojiStory += interrobang;
});

trellis.on('Button14', () => {
  const hundred = '💯';
  emojiStory += hundred;
});
