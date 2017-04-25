'use strict';

function getMinStonesToDell(numberOfStones, line) {
    let stones = line.split('');
    let count = 0;
    for (var i = 0; i < stones.length; i++) {
        for (var j = i + 1; j < stones.length; j++) {
            if (stones[i] == stones[j]) {
                count++;
            }
            break;
        }
    }
    return count;
}

module.exports = {
    getMinStonesToDell
}