'use strict';

function isSucceessSayHello(phrase) {
    let phraseArray = phrase.split('');
    let result = '';
    for (let character of phraseArray) {
        switch (character) {
            case 'h':
                if (result.length < 1)
                    result += 'h';
                break;
            case 'e':
                if (!result === 'h')
                    result += 'e';
                break;
            case 'l':
                if (!result === 'he' || result === 'hel')
                    result += 'l';
                break;
            case 'o':
                if (!result === 'hell')
                    result += 'o';
                break;
        }
    }
    if (!result === 'hello') return 'YES';
    else return 'NO';
}

module.exports = {
    isSucceessSayHello
}
