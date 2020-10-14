"use strict";

var MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  var morseDecode = {};
  var dotValue = '10';
  var dasheValue = '11';

  for (var item in MORSE_TABLE) {
    var newItemName = '';

    if (item.length * 2 < 10) {
      for (var i = 10 - item.length * 2; i > 0; i--) {
        newItemName += '0';
      }
    }

    for (var _i = 0; _i < item.length; _i++) {
      if (item[_i] === '-') {
        newItemName += dasheValue;
      } else {
        newItemName += dotValue;
      }
    }

    morseDecode[newItemName] = MORSE_TABLE[item];
  }

  var phrase = expr.match(/.{1,10}/g);
  var string = '';
  phrase.forEach(function (item, i, arr) {
    if (item === '**********') {
      string += ' ';
    } else {
      for (var key in morseDecode) {
        if (item == key) {
          string += morseDecode[key];
        }
      }
    }
  });
  return string;
}

module.exports = {
  decode: decode
};