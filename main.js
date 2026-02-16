let Phrase = require("moff-palindrome");

let string = prompt("パリンドロームをテストしたい文字列を入力してください:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`${phrase.content}は、パリンドロームです`);
} else {
  alert(`${phrase.content}は、パリンドロームではありません`);
}