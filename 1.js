const inputs = [
    142195,
    119326,
    57976,
    138834,
    132685,
    113092,
    88731,
    52063,
    122899,
    78681,
    117881,
    121912,
    112633,
    85163,
    145655,
    76668,
    92939,
    81941,
    62645,
    126482,
    114642,
    55588,
    95934,
    68172,
    62160,
    111109,
    141496,
    97453,
    83723,
    50309,
    82930,
    66124,
    142265,
    100066,
    147434,
    149708,
    77906,
    71147,
    76590,
    59528,
    67973,
    68187,
    135534,
    129331,
    147054,
    89062,
    63159,
    80990,
    103402,
    139627,
    87251,
    66561,
    102708,
    91307,
    121287,
    149077,
    142275,
    144917,
    98677,
    114912,
    102236,
    56147,
    130660,
    63523,
    112577,
    75086,
    136006,
    142090,
    80446,
    53900,
    144975,
    143195,
    138974,
    60145,
    132474,
    62640,
    62270,
    76275,
    62315,
    85065,
    99617,
    73579,
    97553,
    79715,
    81297,
    77342,
    142907,
    114001,
    137846,
    122398,
    71457,
    133929,
    110617,
    68928,
    56741,
    87754,
    53907,
    68322,
    85782,
    140916,
];

const calculateFuel = (mass) => {
    let fuel = Math.floor(mass / 3) - 2;
    return fuel > 0 ? fuel : 0;
};

const calculateFuelForModule = (moduleMass) => {
    let totalFuel = calculateFuel(moduleMass);
    let additionalFuel = totalFuel;

    while (additionalFuel > 0) {
        additionalFuel = calculateFuel(additionalFuel);
        totalFuel += additionalFuel;
    }

    return totalFuel;
}

const calculateTotalFuel = (moduleMasses) => {
    return moduleMasses.reduce((totalFuel, currentMass) => {
        return totalFuel + calculateFuel(currentMass);
    }, 0);
};

const calculateTotalFuelWithAdditionalFuel = (moduleMasses) => {
    return moduleMasses.reduce((totalFuel, currentMass) => {
        return totalFuel + calculateFuelForModule(currentMass);
    }, 0);
};


module.exports = {
    main: () => {
        // console.log(calculateTotalFuel(inputs));
        console.log(calculateTotalFuelWithAdditionalFuel(inputs));
    }
}
