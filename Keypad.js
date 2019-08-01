const NeoTrellis = require('adafruit-neotrellis');
const trellis = new NeoTrellis();
const request = require('superagent');

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
  const unicorn = '🦄';
  emojiStory += unicorn;
});

trellis.on('Button3', () => {
  const robot = '🤖';
  emojiStory += robot;
});

trellis.on('Button4', () => {
  const party = '🎉';
  emojiStory += party;
});

trellis.on('Button5', () => {
  const devil = '😈';
  emojiStory += devil;
});
 
trellis.on('Button6', () => {
  const cry = '😭';
  emojiStory += cry;
});

trellis.on('Button7', () => {
  const cry = '😭';
  emojiStory += cry;
});

trellis.on('Button8', () => {
  const heartEyes = '😍';
  emojiStory += heartEyes;
});

trellis.on('Button9', () => {
  const taco = '🌮';
  emojiStory += taco;
});

// trellis.on('press', data => {
//   // any button pressed
//   // number is the button pressed
//   const { number } = data;
// });
 
// // change button 0 to red
// // (index, r, g, b)
// trellis.changeColor(0, 255, 0, 0)

//event listner functions to gather and store button presses?
//into an array? 

//function that sends the emoji story in the model?

//wrap in a function

//code a submit button to send the request



