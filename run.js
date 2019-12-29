const day1 = require('./1.js');
const day2 = require('./2.js');
const day3 = require('./3.js');

const days = {
    '1': day1,
    '2': day2,
    '3': day3,
};

const getFlags = () => {
    const arguments = process.argv;
    const flags = {
        day: undefined,
        part: undefined,
    };

    arguments.forEach((argument, index) => {
        let flag, value;
        if (argument.includes('--')) {
            flag = argument.replace('--', '').toLowerCase();
        }
        if (flag && Object.keys(flags).includes(flag)) {
            value = arguments[index + 1];
            switch(flag) {
                case 'day':
                    flags.day = Object.keys(days).includes(value) ? value : undefined;
                    break;
                case 'part':
                    flags.part = ['1', '2'].includes(value) ? value : undefined;
                    break;
            }
        }
    });
    return flags;
}

const runProgram = () => {
    const flags = getFlags();
    if (flags.day && flags.part) {
        const program = days[flags.day];
        program[flags.part]();
    } else {
        console.error('Invalid flags. Use --day <#> --part <#>');
    }
}

runProgram();
