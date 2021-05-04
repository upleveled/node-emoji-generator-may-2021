const emoji = require('node-emoji');

if (!process.argv[2]) {
  console.log(emoji.random().emoji);
} else if (emoji.hasEmoji(process.argv[2])) {
  console.log(emoji.get(process.argv[2]));
} else {
  console.log('Emoji not found');
}
