'use strict';

function getYear(year) {
    for (var i = year; i < 9013; i++) {
        if (check(i) == true) {
            return i;
        }

    }

}

function check(year) {
    let yearInArray = year.toString().split('');
    for (var j = 0; j < 4; j++) {
        for (var k = j + 1; k < 4; k++) {
            if (yearInArray[j] == yearInArray[k]) {
                return false;
            }
        }
    }
    return true;
}


module.exports = {
    getYear
}