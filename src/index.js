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

function decode(ex) {
    let z = []
    let mo = ''

    for (let i = 0; i < ex.length; i+=10) {
        let b = i+10
        let x = [...ex.slice(i,b)]
        let n = []
        if(ex.slice(i,b) != '**********'){
            for (let v = 0; v < 10; v+=2) {
                let c = v+1
                if(+x[v] + +x[c] == 1){
                    n.push('.')
                }else if(+x[v] + +x[c] == 2){
                    n.push('-')
                }else if(+x[v] + +x[c] == 0){
                }
            }
        } else {
            n.push('***')
        }
        z.push(n.join(''))
    }
    console.log(z)
    z.forEach((elem, i) => {
        if(elem != '***'){
            for (let key in MORSE_TABLE) {
                if(elem == key){
                    mo += MORSE_TABLE[key]
                }
            }
        } else {
            mo += ' '
        }

    })
    return mo
}

module.exports = {
    decode
}