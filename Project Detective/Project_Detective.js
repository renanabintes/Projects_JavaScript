const prompt = require('prompt-sync')();
console.log("Let's play detective? Answer the questions to find out if you are 'Suspect', 'Accomplice', 'Murderer' or 'Innocent'.");
console.log("-------------------------------------------------------------------------------------------------------------------")
console.log("You were asked to provide information about your whereabouts as you were a person close to the victim.");
console.log("")
let answer = 0
let question1 = prompt("Did you call the victim?[yes/no]").slice(0).toLowerCase();
if (question1 == 'yes') {
    answer += 1;
}
let question2 = prompt("Were you at the crime scene?[yes/no]").slice(0).toLowerCase();
if (question2 == 'yes') {
    answer += 1;
}
let question3 = prompt("Do you live close to the victim?[yes/no]").slice(0).toLowerCase();
if (question3 == 'yes') {
    answer += 1;
}
let question4 = prompt("Did you owe the victim something?[yes/no]").slice(0).toLowerCase();
if (question4 == 'yes') {
    answer += 1;
}
let question5 = prompt("Have you ever worked with the victim?[yes/no]").slice(0).toLowerCase();
if (question5 == 'yes') {
    answer += 1;
}

if (answer == 2) {
    console.log("You are 'Suspect'.");
} else if (answer == 3 || answer == 4) {
    console.log("You are 'Accomplice'.");
} else if (answer == 5) {
    console.log("You are the 'Assassin'.");
} else {
    console.log("You are 'Innocent'.");
};