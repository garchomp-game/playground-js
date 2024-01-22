process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

function customLoop(value, kaigyou) {
  for(let i = 1; i <= value; i++) {
    process.stdout.write(String(i));
    if(i != value) {
      process.stdout.write(" ")
    }
    if(kaigyou && i == value) {
      process.stdout.write("\n")
    }
  }
}

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let count = lines[0];
  let values = lines[1].split(" ");
  let checkLast = true;
  for(let i = 1; i <= count; i ++) {
    if(i == count) checkLast = false
    customLoop(values[i - 1], checkLast);
  }
});
