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

const hasMaxTwoInARow = digits => {
    let repeatingDigit = digits[0];
    let numInARow = 1;
    let passingRepeats = 0;

    for (let i = 0; i < digits.length; i++) {
        if (i === digits.length - 1 && numInARow === 2) {
            passingRepeats++;
        } else {
            if (digits[i] === digits[i+1]) {
                numInARow++;
            } else {
                if (numInARow === 2) {
                    passingRepeats++;
                }
                numInARow = 1;
            }
            repeatingDigit = digits[i];
        }
    }
    return passingRepeats > 0;
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

const passesTests = (tests, number) => {
    let digits = number.toString().split('');
    for (let i = 0; i < tests.length; i++) {
        let pass = tests[i](digits);
        if (!pass) {
            return false;
        }
    }
    return true;
};

const getPotentialPasswords = (tests, startRange, endRange) => {
    let potentialPasswords = [];
    for (let num = startRange; num <= endRange; num++) {
        if (passesTests(tests, num)) {
            potentialPasswords.push(num);
        }
    }
    return potentialPasswords;
};

module.exports = {
    '1': () => {
        const tests = [hasSixDigits, hasADouble, hasIncreasingDigits];
        let potentialPasswords = getPotentialPasswords(tests, inputStart, inputEnd);
        console.log(potentialPasswords.length);
    },
    '2': () => {
        const tests = [hasSixDigits, hasMaxTwoInARow, hasIncreasingDigits];
        let potentialPasswords = getPotentialPasswords(tests, inputStart, inputEnd);
        console.log(potentialPasswords.length);
    }
};
