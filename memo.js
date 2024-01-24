// 九九の表を作る
// スペース二つとバーティカルライン( | )で、数字は二桁で統一

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let value = String(i * j);
    if (j !== 9) {
      process.stdout.write(`${value.padStart(2)} | `);
    } else {
      process.stdout.write(`${value.padStart(2)}`);
    }
    // 最終行でなければ=で区切る
  }
  if (i !== 9) {
    process.stdout.write("\n");
    let num = 2 * 9 + 3 * 8;
    let str = "";
    for (let k = 0; k < num; k++) {
      str += "=";
    }
    process.stdout.write(str);
    process.stdout.write("\n");
  }
}



























// 定数の定義
const MAX_NUMBER = 9; // 九九の最大数
const DIGIT_WIDTH = 2; // 各数値の幅 (2桁)
const SEPARATOR_WIDTH = 3; // "|" とその前後のスペースの幅

/**
 * 九九の各セルを生成する関数
 * @param {number} i - 乗算の左側の数
 * @param {number} j - 乗算の右側の数
 * @return {string} 乗算結果の文字列（指定した幅でパディングされた）
 */
function generateMultiplicationCell(i, j) {
  return (i * j).toString().padStart(DIGIT_WIDTH);
}

/**
 * 九九の一行を生成する関数
 * @param {number} i - 生成する行の数
 * @return {string} 九九の行の文字列
 */
function generateMultiplicationRow(i) {
  // Array.fromとmapを使用して九九の一行を生成
  return Array.from({ length: MAX_NUMBER }, (_, j) =>
    generateMultiplicationCell(i, j + 1),
  ).join(" | ");
}

/**
 * 表の区切り行を生成する関数
 * @return {string} 区切り行の文字列
 */
function generateSeparatorRow() {
  // 全体の長さを計算し、等号で埋めた文字列を生成
  const totalLength =
    DIGIT_WIDTH * MAX_NUMBER + SEPARATOR_WIDTH * (MAX_NUMBER - 1);
  return "=".repeat(totalLength);
}

// メインの処理
for (let i = 1; i <= MAX_NUMBER; i++) {
  console.log(generateMultiplicationRow(i));
  // 最後の行以外では区切り行を出力
  if (i !== MAX_NUMBER) {
    console.log(generateSeparatorRow());
  }
}
