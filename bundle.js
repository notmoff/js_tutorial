(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("moff-palindrome");

let string = prompt("パリンドロームをテストしたい文字列を入力してください:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`${phrase.content}は、パリンドロームです`);
} else {
  alert(`${phrase.content}は、パリンドロームではありません`);
}
},{"moff-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Stringにreverse()メソッドを追加
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Stringにblank()メソッドを追加
String.prototype.blank = function() {
  const blank = /^\s*$/;
  return blank.test(this);
}

// Arrayにlast()メソッドを追加
Array.prototype.last = function() {
  return this[this.length - 1];
}


// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // 文字列を全て小文字に変換
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // コンテンツの文字だけを返す
  this.letters = function letters() {
    const letterRegex = /^[a-z]$/i;
    return Array.from(this.content).filter(c => letterRegex.test(c)).join("");
  }

  // プロセスを終えたフレーズを返す
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  // フレーズがパリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

// let frase = new Phrase("Madam, I'm Adam.");
// console.log(frase.letters());

},{}]},{},[1]);
