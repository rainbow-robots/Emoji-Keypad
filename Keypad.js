const NeoTrellis = require('adafruit-neotrellis');
const trellis = new NeoTrellis();
const request = require('superagent');

// // change button 0 to red
// // (index, r, g, b)
// trellis.changeColor(0, 255, 0, 0)

function SendEmojis() {
  return request
    .post('https://alchemypdxbot.herokuapp.com/api/v1/emojis')
    .send({ emojiStory })
    .then(res => {
      console.log('AHHHHHH', res.body);
    })
    .catch(console.log);
}

let emojiStory = '';
 
trellis.on('Button15', () => {
  console.log('Button Pressed');
  SendEmojis();
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


