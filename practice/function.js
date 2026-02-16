// url生成: 命令型バージョン
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// const imperativeUrls = (element) => {
//   let urls   = [];
//   element.forEach((e) => {
//     urls.push(e.toLowerCase().split(/\s+/).join("-"));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));



// // url生成: 関数型バージョン
// function functionalUrls(elements) {
//   return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
// }
// console.log(functionalUrls(states));


// // 2つ以上の機能を抱えているため切り分ける

// // URLに適した文字列を生成
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join('-');
// }
// // url生成: 関数型バージョン2
// function altFunctionalUrls(elements) {
//   return elements.map(element => urlify(element));
// }
// console.log(altFunctionalUrls(states));


// // URLを生成
// function generateUrl(string) {
//   return `https://example.com/${urlify(string)}`
// }
// // URLの配列を生成
// function fullUrls(elements) {
//   return elements.map(element => generateUrl(element));
// }
// console.log(fullUrls(states));


// // 1単語の文字列抽出: 命令型バージョン
// function imperativeFilter(elements) {
//   let altstates = [];
//   elements.forEach((element) => {
//     if (element.split(/\s+/).length === 1) {
//       altstates.push(element.toLowerCase());
//     }
//   });
//   return altstates;
// }
// console.log(imperativeFilter(states));

// // 1単語の文字列抽出: 関数型バージョン
// function functionalSingles(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 1);
// }

// console.log(functionalSingles(states));


// // 2つ以上の機能を抱えているため切り分ける
// // １つ単語でできた文字列だけ選ぶ
// function isSingleElementArray(array) {
//   return array.split(/\s+/).length === 1;
// }

// // 条件に合う文字列で構成される配列を生成
// function altFunctionalSingles(elements) {
//   return elements.filter(element => isSingleElementArray(element));
// }

// console.log(altFunctionalSingles(states))


// // Dakotaが含まれている配列を返す
// function isIncludeDakota(elements) {
//   return elements.filter(element => element.includes("Dakota"));
// }
// console.log(isIncludeDakota(states));

// // 要素数が２の配列を返す
// function doubles(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 2);
// }
// console.log(doubles(states));


// sum: 命令型バージョン
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
  let total = 0;
  elements.forEach((element) => {
    total += element;
  });
  return total;
}
console.log(imperativeSum(nums));

// sum: 関数型バージョン
function functionalSum(numbers) {
  return numbers.reduce((total, n) => { return total += n; }, 0);
}
console.log(functionalSum(nums));


function product(numbers) {
  return numbers.reduce((total, n) => { return total *= n; }, 1);
}
console.log(product(nums));



function imperativeLength(elements) {
  let lengths = {};
  elements.forEach((element) => {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLength(states));


function functionalLength(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLength(states));