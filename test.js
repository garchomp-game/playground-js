import BigNumber from 'bignumber.js';

function sumRangeWithBigNumberJs(min, max) {
    let bigMin = new BigNumber(min);
    let bigMax = new BigNumber(max);
    let totalNumbers = bigMax.minus(bigMin).plus(1);
    let sum = totalNumbers.times(bigMin.plus(bigMax)).div(2);
    return sum.toFixed(); // 数値を文字列として出力
}

let min = 987543;
let max = 587490358734523;
console.log(sumRangeWithBigNumberJs(min, max));
