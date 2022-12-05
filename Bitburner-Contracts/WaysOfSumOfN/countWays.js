function countWays(n) {
  let table = new Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    table[i] = 0;
  }
  table[0] = 1;

  // Pick all integer one by one and
  // update the table[] values after
  // the index greater than or equal
  // to n
  for (let i = 1; i < n; i++)
    for (let j = i; j <= n; j++)
      table[j] += table[j - i];

  return table[n];
}
let n = 95;
console.log(countWays(n));