'use strict';

function makeDecision(weight) {
    if (weight < 4 || weight % 2 > 0) {
        return "NO"
    }
    else return 'YES';
};

function makeDecisionType(weight) {
    if (weight < 4 || weight % 2 > 0) {
        return "NO"
    }
    else return 'YES';
};

module.exports = {
    makeDecision,
    makeDecisionType
};