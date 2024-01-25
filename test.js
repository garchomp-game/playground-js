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
  let [dataListCount, searchQueueCount] = lines[0].split(" ").map(Number);
  let dataList = [];
  let searchQueue = [];
  for (let i = 0; i < dataListCount; i++) {
    dataList.push(lines[i + 1]);
  }
  for (
    let i = dataListCount + 1;
    i < dataListCount + 1 + searchQueueCount;
    i++
  ) {
    searchQueue.push(lines[i]);
  }

  for(let i = 0; i < searchQueue.length; i++) {
    console.log(search(dataList, searchQueue[i]));
  }
});

// 関数名 `search` 
// 説明: dataListの上から順番に検索し、ヒットしたら先頭を1として返す。ヒットしなかったら-1を返す。
// @param {array} dataList - 検索対象の配列
// @param {number} searchQueue - 検索キュー
// @return {number} 検索結果
function search(dataList, searchQueue) {
  let result = -1;
  for (let i = 0; i < dataList.length; i++) {
    if (dataList[i] === searchQueue) {
      result = i + 1;
      break;
    }
  }
  return result;
}
