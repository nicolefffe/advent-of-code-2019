const programValues = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,5,19,23,1,23,5,27,2,27,10,31,1,5,31,35,2,35,6,39,1,6,39,43,2,13,43,47,2,9,47,51,1,6,51,55,1,55,9,59,2,6,59,63,1,5,63,67,2,67,13,71,1,9,71,75,1,75,9,79,2,79,10,83,1,6,83,87,1,5,87,91,1,6,91,95,1,95,13,99,1,10,99,103,2,6,103,107,1,107,5,111,1,111,13,115,1,115,13,119,1,13,119,123,2,123,13,127,1,127,6,131,1,131,9,135,1,5,135,139,2,139,6,143,2,6,143,147,1,5,147,151,1,151,2,155,1,9,155,0,99,2,14,0,0];

const getResult = (operation, operand1, operand2) => {
    if (operation === 1) {
        return operand1 + operand2;
    }
    if (operation === 2) {
        return operand1 * operand2;
    }
};

const computer = (values) => {
    let index = 0;
    let opCode = values[0];
    let computed = values;
    let indexop1, indexop2, indexresult;

    while (index <= (values.length - 4)) {
        opCode = computed[index];
        if (opCode === 99) {
            break;
        }
        indexop1 = computed[index + 1];
        indexop2 = computed[index + 2];
        indexresult = computed[index + 3];
        computed[indexresult] = getResult(opCode, computed[indexop1], computed[indexop2]);
        index = index + 4;
    }
    return computed;
}

const runProgram = (values, noun, verb) => {
    let computed = values;
    computed[1] = noun;
    computed[2] = verb;

    computed = computer(computed);
    return computed;
}

const findInputs = (values, desiredResult) => {
    let computed, result, noun, verb;

    while (result != desiredResult) {
        noun = Math.floor(Math.random() * 99);
        verb = Math.floor(Math.random() * 99);
        computed = runProgram([...values], noun, verb);
        result = computed[0];
    }
    return (noun * 100) + verb;
}


module.exports = {
    main: () => {
        //console.log(runProgram(programValues, 12, 2)[0]);
        console.log(findInputs(programValues, 19690720));
    }
}