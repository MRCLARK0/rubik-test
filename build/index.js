"use strict";
const makeScramble = () => {
    const options = [
        "F", "F2", "F'", "R", "R2", "R'",
        "U", "U2", "U'", "B", "B2", "B'",
        "L", "L2", "L'", "D", "D2", "D'"
    ];
    // 0 = F, 1 = R, 2 = U, 3 = B, 4 = L, 5 = D
    const numOptions = [0, 1, 2, 3, 4, 5];
    let scramble = [];
    let scrambleMoves = [];
    let bad = true;
    while (bad) {
        scramble = [];
        for (let i = 0; i < 20; i++) {
            scramble.push(numOptions[getRandomInt(6)]);
        }
        // check if moves directly next to each other involve the same letter
        for (let i = 0; i < 20 - 1; i++) {
            if (scramble[i] === scramble[i + 1]) {
                bad = true;
                break;
            }
            else {
                bad = false;
            }
        }
    }
    printScrambleList(scramble);
    // switch numbers to letters
    let move;
    for (let i = 0; i < 20; i++) {
        switch (scramble[i]) {
            case 0:
                move = options[getRandomInt(3)]; // 0, 1, 2
                scrambleMoves.push(move);
                break;
            case 1:
                move = options[getRandomIntBetween(3, 6)]; // 3, 4, 5 
                scrambleMoves.push(move);
                break;
            case 2:
                move = options[getRandomIntBetween(6, 9)]; // 6, 7, 8
                scrambleMoves.push(move);
                break;
            case 3:
                move = options[getRandomIntBetween(9, 12)]; // 9, 10, 11
                scrambleMoves.push(move);
                break;
            case 4:
                move = options[getRandomIntBetween(12, 15)]; // 12, 13, 14
                scrambleMoves.push(move);
                break;
            case 5:
                move = options[getRandomIntBetween(15, 18)]; // 15, 16, 17
                scrambleMoves.push(move);
                break;
        }
    }
    printScrambleList(scrambleMoves);
    return scrambleMoves;
};
const getRandomInt = (max) => {
    // returns up to max - 1
    return Math.floor(Math.random() * Math.floor(max));
};
const getRandomIntBetween = (min, max) => {
    // return a number from min to max - 1, Ex: 3, 9 => 3 - 8
    return Math.floor(Math.random() * (max - min) + min);
};
const printScrambleList = (list) => {
    console.log(JSON.stringify(list));
};
makeScramble();
