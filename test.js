process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let [A, B, N] = lines[0].split(' ').map(Number);
  let numbers = lines[1].split(' ').map(Number);
  
  for (let i = 0; i < N; i++) {
    if (numbers[i] == A) {
      console.log(B);
    } else {
      console.log(numbers[i]);
    }
  }
});
