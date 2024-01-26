const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  const aGroupSize = Number(lines[0]);
  const aGroup = lines.slice(1, aGroupSize + 1).map(Number);

  const bGroupSize = Number(lines[aGroupSize + 1]);
  const bGroup = lines
    .slice(aGroupSize + 2, aGroupSize + 2 + bGroupSize)
    .map(Number);

  let currentGroup = "A";
  for (let day = 1; day <= 31; day++) {
    if (aGroup.includes(day) && bGroup.includes(day)) {
      console.log(currentGroup);
      currentGroup = currentGroup === "A" ? "B" : "A";
    } else if (aGroup.includes(day)) {
      console.log("A");
    } else if (bGroup.includes(day)) {
      console.log("B");
    } else {
      console.log("x");
    }
  }
});

