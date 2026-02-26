//Initing Vars
const userName = "Uditi"; // used const because the user's name will not change
let userAge = 20; // let as age could change in the future
const isStudent = true; // student status is not gonna change
// Logging the vars to the actualconsole
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Is Student:", isStudent);
// Greet User Func
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
};
// Button
const startButton = document.querySelector('.btn');
// Conditinal Checking Age Func
function checkAge(age) {
    if (age < 5) {
        console.log("You’re too young to take this quiz.");
    } else {
        console.log("Welcome to the quiz!");
    }
}
const skills = ["HTML", "CSS", "JavaScript"];
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}
greetUser(userName);
checkAge(userAge);