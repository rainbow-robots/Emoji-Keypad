//variables to store button presses?
// const buttonOne = ...

const NeoTrellis = require('adafruit-neotrellis');
const trellis = new NeoTrellis();
const request = require('superagent');

function SendEmojis() {
  return request
    .post('https://alchemypdxbot.herokuapp.com/api/v1/emojis')
    .send({ emojiStory: '🦄' })
    .then(res => {
      console.log('AHHHHHH', res.body);
    }); 
}
 
trellis.on('Button15', () => {
  console.log('Button Pressed');
  SendEmojis();
});

// trellis.on('Button0', () => {
//   // button 0 pressed
// });
 
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



