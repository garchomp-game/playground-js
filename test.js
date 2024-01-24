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
