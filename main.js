function fromNormalToMorse() {
    const inputText = document.querySelector('#inputText');
    const outputText = document.querySelector('#outputText');

    const morseCodeMap = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
        'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
        'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': ' / '
    };

    let inputTextValue = inputText.value;
    inputTextValue = inputTextValue.toLowerCase();
    let morseCode = '';

    for (let char of inputTextValue) {
        if (morseCodeMap[char]) {
            morseCode += morseCodeMap[char] + ' ';
        } else {
            morseCode += char;
        }
    }

    outputText.innerText = morseCode.trim();
}

function fromMorseToNormal() {
    const inputText = document.querySelector('#inputText');
    const outputText = document.querySelector('#outputText');

    const morseCodeMap = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
        '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
        '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', ' / ': ' '
    };

    const morseArray = inputText.value.trim().split(' ');

    let text = '';
    for (let morse of morseArray) {
        if (morseCodeMap[morse]) {
            text += morseCodeMap[morse];
        } else {
            text += ' '; 
        }
    }

    outputText.innerText = text.trim();
}
