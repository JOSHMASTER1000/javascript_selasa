// Conditional Statement (int, str, boolean, float)
//IF = only one/ main condition
//ELSE IF = A LOT
//ELSE = ANOTHER CONDITION

// AND OR NOT (&& || !)
// compare (== <= >= < >)

const burger = "kfc";
let meGo = "please";

// if (burger == meGo ) {
//     console.log("True bener bener bener");
//     document.write("bener")
// } else {
//     console.log ("mending puland deh bobo")
// }

//=========================================

// if (burger == meGo ) {
//     console.log("True bener bener bener");
//     document.write("bener");
// } else if (burger == "KFC") {
//     console.log ("mending puland deh bobo")
//     document.write("nah kan ngga sama");
// } else {
//     document.write("Nigga")
// }

//===========================

// const Bro = "Lie";
// let She = "Truth";

// if (Bro == She) {
//     console.log("Bro is True")
//     document.write("Very True For Real");
// } else if (Bro == "LYING") {
//     console.log ("Bruh He lying")
//     document.write("BRO IS LYING FOR REAL")
// } else {
//     document.write("--God has descend from the heavens to take your sin----");
// }

// && = semua nilai harus betul
// || = salah satu aja nilaiya betul maka akan dibetulkan
// ===

console.log(burger == "kfc" && burger != "kfc");
console.log(burger == "kfc" || burger != "kfc");
console.log(burger != meGo);

const num1 = 1; 
const num2 = "1";

console.log(num1 === num2);