// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####
function challengeBanner (num) {
    console.log (`###### Challenge ${num} #####`)
}

challengeBanner(1);
// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
challengeBanner(2);

for (i=1; i <= 20; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}

// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
challengeBanner(3);
let noIfsModsOrButs = 1
while (i <= 20){
    noIfsModsOrButs = (noIfsModsOrButs * 3) + 3;
    console.log(noIfsModsOrButs);
}



// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
challengeBanner(4);
for (i=20; i >= 1; i--){
    console.log(i);
}

// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
challengeBanner(5);
let stringIndividual = 'Boy howdy am I good at this!';
let variableFiveChall = 0;
while (variableFiveChall < stringIndividual.length){
    console.log(stringIndividual[variableFiveChall]);
    variableFiveChall++;
}

// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
challengeBanner(6);
let stringPrintEveryThirdChar = 'And getting better every day';
let variableSixChall = 1;
while(variableSixChall < stringPrintEveryThirdChar.length) {
        console.log(stringPrintEveryThirdChar[variableSixChall]);
        variableSixChall = variableSixChall + 3;
}

// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
challengeBanner(7);
let stringChallSeven = 'Am I the best?';
let variableSevenChall = 0;
while (variableSevenChall < stringChallSeven.length) {
    console.log(stringChallSeven[variableSevenChall].toUpperCase());
    variableSevenChall++;
}

// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
challengeBanner(8);
let stringChallEight = 'Whoa, I am the Best!';
let variableEightChall = 0;
let space = 0;
let newStrChallEight = ' ';
while (variableEightChall < stringChallEight.length) {
    if (stringChallEight[newStrChallEight] === ' ' ) {
        space ++;
    }
    if (space === 2) {
        stringChallEight.toUpperCase(' ');
    }
    if (space > 2 ) {
        stringChallEight.toLowerCase();
    }

}

// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.


// 10.
//
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


// 11.
//
// There is no 11. Celebrate! You did it!
