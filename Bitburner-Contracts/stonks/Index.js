const { Input } = require('./Input');

function buyLowSellHigh(inp) {
  const stonks = inp.split(',');
  let low = stonks[0];
  let high = stonks[0];
  let bought = 0;
  let profit = 0;
  // for (let stonk of stonks) {
  //   if (stonk < low) low = stonk;
  //   if (stonk > high)  high = stonk;
  //   if(stonk > bought && bought < high) profit += high-bought; bought = 0;
  //   if(!bought){}
  // }
  console.log([159 - 44, 97 - 66, 120 - 30, 134 - 84, 177 - 88, 199 - 18, 189 - 101, 175 - 8, 196 - 113, 159 - 23].reduce((a, b) => a + eval(b), 0));
  console.log('something: ', 123);
}

buyLowSellHigh(Input); //Not Finished