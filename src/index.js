const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseDecode = {}
    const dotValue = '10'
    const dasheValue = '11'
    for(let item in MORSE_TABLE) {
      let newItemName = ''
      if (item.length*2 < 10) {
        for (let i = 10 - item.length*2; i > 0; i--) {
          newItemName += '0'
        }
      }
      for (let i = 0; i < item.length; i++) {
        if (item[i] === '-') {
          newItemName += dasheValue
        } else {
          newItemName += dotValue
        }
      }
      morseDecode[newItemName] = MORSE_TABLE[item]
    }
    const phrase = expr.match( /.{1,10}/g );
    let string = ''
    phrase.forEach((item, i, arr) => {
      if (item === '**********') {
        string += ' '
      } else {
        for (let key in morseDecode) {
          if (item == key) {
            string += morseDecode[key]
          }
        }
      }
    })
    return string
}

module.exports = {
    decode
}