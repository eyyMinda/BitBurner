const { Input } = require('./Input');

function buyLowSellHigh(inp) {
  let nums = '0123456789';
  let length = 0;
  let str = '';
  for (let i = 0; i < inp.length;) {
    let char = inp[i];
    if (nums.includes(char) && !nums.includes(inp[i - 1]) && !nums.includes(inp[i + 1])) {

    }
    if (nums.includes(char)) {
      char = parseInt(char);
    } else {
      console.log(char);
    }
  }
  console.log('Decoded: ', str);
  console.log('Start: ', 'TgoHvvnbeBi');
}

buyLowSellHigh(Input); //Not Finished