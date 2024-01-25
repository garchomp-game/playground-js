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
  /**
   * 指定された値でセルを生成する関数
   * val1 と val2 が指定されている場合、フォーマットされた文字列 (val1, val2) を返す
   * そうでなければ i と j の乗算結果を返す
   * @param {number} i - 行のインデックス
   * @param {number} j - 列のインデックス
   * @param {number} [val1] - 任意の値1
   * @param {number} [val2] - 任意の値2
   * @param {number} pad - 文字列のパディング幅
   * @return {string} 生成されたセルの文字列
   */
  function generateCellValue(i, j, val1, val2, pad) {
    const result =
      val1 !== undefined && val2 !== undefined
        ? `(${String(val1).padStart(pad)}, ${String(val2).padStart(pad)})`
        : i * j;
    return result.toString();
  }

  /**
   * 表の一行を生成する関数
   * @param {number} rowNum - 行の数
   * @param {number} colNum - 列の数
   * @param {number} [val1] - 任意の値1
   * @param {number} [val2] - 任意の値2
   * @param {number} pad - セルの文字列のパディング幅
   * @return {string} 生成された行の文字列
   */
  function generateRow(rowNum, colNum, val1, val2, pad) {
    return Array.from({ length: colNum }, (_, j) =>
      generateCellValue(rowNum, j + 1, val1, val2, pad),
    ).join(" | ");
  }

  /**
   * 表の区切り行を生成する関数
   * @param {number} colNum - 列の数
   * @param {number} col - 1つのセルの文字数
   * @return {string} 生成された区切り行の文字列
   */
  function generateSeparatorRow(colNum, col) {
    const totalLength = col * colNum + 3 * (colNum - 1);
    return "=".repeat(totalLength);
  }

  // メインの処理
  function generateTable(height, width, col, pad, val1, val2) {
    for (let i = 1; i <= height; i++) {
      console.log(generateRow(i, width, val1, val2, pad));
      if (i !== height) {
        console.log(generateSeparatorRow(width, col));
      }
    }
  }

  let [height, width, val1, val2] = lines[0].split(" ").map(Number);
  generateTable(height, width, 22, 9, val1, val2); // 特定の値での九九
});

