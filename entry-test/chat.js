'use strick';

function isSucceessSayHello(phrase) {
    let phraseArray = phrase.split('');
    let result = '';
    for (let obj of phraseArray) {
        switch (obj) {
            case 'h':
                if (result.length < 1)
                    result += 'h';
                break;
            case 'e':
                if (!result.localeCompare('h'))
                    result += 'e';
                break;
            case 'l':
                if (!result.localeCompare('he') || !result.localeCompare('hel'))
                    result += 'l';
                break;
            case 'o':
                if (!result.localeCompare('hell'))
                    result += 'o';
                break;
        }

    }
    if (!result.localeCompare('hello')) return 'YES';
    else return 'NO';

}

module.exports = {
    isSucceessSayHello
}
