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
  let aGroupCount = Number(lines[0]);
  let aGroup = [];
  for (let i = 1; i <= aGroupCount; i++) {
    aGroup.push(Number(lines[i]));
  }
  let bGroupCount = Number(lines[aGroupCount + 1]);
  let bGroup = [];
  for (let i = aGroupCount + 2; i <= aGroupCount + bGroupCount + 1; i++) {
    bGroup.push(Number(lines[i]));
  }
  let changeGroup = "A";
  for (let i = 1; i <= 31; i++) {
    if (aGroup.includes(i) && bGroup.includes(i)) {
      console.log(changeGroup);
      changeGroup == "A" ? (changeGroup = "B") : (changeGroup = "A");
    } else if (aGroup.includes(i)) {
      console.log("A");
    } else if (bGroup.includes(i)) {
      console.log("B");
    } else {
      console.log("x");
    }
  }
});
