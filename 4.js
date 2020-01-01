const inputStart = 231832;
const inputEnd = 767346;

const hasSixDigits = digits => {
    return digits.length === 6;
};

const hasADouble = digits => {
    return digits.reduce((doubleExists, currentDigit, currentIndex, allDigits) => {
        if (currentIndex + 1 == allDigits.length) {
            return doubleExists;
        } else {
            let nextDigit = allDigits[currentIndex + 1];
            return doubleExists || currentDigit == nextDigit;
        }
    }, false);
};

const hasIncreasingDigits = digits => {
    return digits.reduce((prevDigitsIncreasing, currentDigit, currentIndex, allDigits) => {
        if (currentIndex == 0) {
            return true;
        } else {
            let prevDigit = allDigits[currentIndex - 1];
            return prevDigitsIncreasing && parseInt(currentDigit) >= parseInt(prevDigit);
        }
    }, true);
};

const tests = [hasSixDigits, hasADouble, hasIncreasingDigits];

const passesTests = number => {
    let digits = number.toString().split('');
    for (let i = 0; i < tests.length; i++) {
        let pass = tests[i](digits);
        if (!pass) {
            return false;
        }
    }
    return true;
};

const getPotentialPasswords = (startRange, endRange) => {
    let potentialPasswords = [];
    for (let num = startRange; num <= endRange; num++) {
        if (passesTests(num)) {
            potentialPasswords.push(num);
        }
    }
    return potentialPasswords;
};

module.exports = {
    '1': () => {
        let potentialPasswords = getPotentialPasswords(inputStart, inputEnd);
        console.log(potentialPasswords.length);
    }
};
