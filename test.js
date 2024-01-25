process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  let values = [];
  let errCount = 0;
  let count = Number(lines[0]);
  for(let i = 1; i < lines.length; i++) {
    if(lines[i] > count || values.includes(lines[i])) {
      errCount++;
    } else {
      values.push(lines[i]); 
    }
  }
  console.log(errCount)
});
