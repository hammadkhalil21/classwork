

let character = "Wizard";
let treasure = "Gems";

// console.log ("The " + character + " found " + treasure)   ;
console.log (`the ${character} found ${treasure}!`)

if(1 <= 2){
    console.log ("true");
}
const bankBalance = 5;
if(bankBalance >= 5){
    console.log ("Congrats you can buy");   
}else{
    console.log ("sorry, better income is needed");
}

let employeeRating = 5;

if (employeeRating < 2){
    console.log ("See manager for Review");
}else if (employeeRating >= 2 && employeeRating < 5) {
    console.log ("Great Work");
} else {
    console.log ("You are amazing");
}

let password = "superDude";
// if (password.length >= 6){
//     if (password.indexOf (" ") !== -1){
//         console.error ("No Spaces allowed in passwords")
//     }else {
//         console.log ("Password Accepted");
//     }
// } else {
//     console.log ("Password needs to be longer");
// }

// let mysteryNum = " ";
// if (mysteryNum){
//     console.log ("Truthie");
// }else {
//     console.log ("falsy");
// }
// console.log (1 <= 15 && "abc" === "abc");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Password Accepted");
}else {
    console.log("Password not accepted");
}
console.log(-1 !== -1 || 10 === 10);
console.log(10/2 === 5 || null);

let age = 4;
if (age < 6 || age >= 65) {
    console.log ("Your ticket is free");
}else {
    console.log ("Child price is $5, Adult price is $10");
}
let choice = "Cheezits";
if (choice === "Cheetos" || choice === "Cheezits" || choice === "doritos") {
    console.log ("Great Choice");
} else {
    console.log ("Bad choice");
}
console.log (!(0 === 0));

let wineChoice = "red";
if (wineChoice === "rosay" || wineChoice === "red"){
    console.log ("We are out of stock");
} else {
    console.log ("order accepted")
}
if (!(wineChoice === "rosay" || wineChoice === "red")){
    console.log ("order Accepted")
} else {
    console.log("we are out of stock");
}

let num = 1313;
console.log(num === 1313 || num === 13 && num > 1314);

let x = 13; 
console.log (x < 13 && x > 1);

// if( day === 1) {
//     console.log("SUNDAY");
//   }
//   else if( day === 2) {
//     console.log("MONDAY");
//   }
//   else if( day === 2) {
//     console.log("TUESDAY");
//   }
//   else if( day === 2) {
//     console.log("WEDNESDAY");
//   }
//   else if( day === 2) {
//     console.log("THURSDAY");
//   }
//   else if( day === 2) {
//     console.log("FRIDAY");
//   }
//   else if( day === 2) {
//     console.log("SATURDAY");
//   }
//   else {
//     console.log("INVALID DAY");
//   }
    let day = 6;
  switch(day) {
    case 1:
      console.log("SUNDAY");
      break;
    case 2:
      console.log("MONDAY");
      break;
    case 3:
      console.log("TUESDAY");
      break;
    case 4:
      console.log("WEDNESDAY");
      break;
    default:
        console.log("Not a real number")
    }
let emoji = "heart";
    switch(emoji) {
        case 'happy face':
        case 'sad face':
          console.log("yellow");
          break;
        case 'eggplant':
          console.log("purple");
          break;
        case 'heart':
        case 'lips':
          console.log("red");
          break;
      }

let symbol = "shamRock"; 
if (symbol === "shamRock") {
    console.log ("lucky");
} else {
    console.log ("unlucky");
}
symbol === "shamRock" ? console.log ("lucky") : console.log("unlucky"); // turnerary operator, use ? and : 

let color;
let userStatus = "online";
// if (userStatus === "offline"){
//     color = "red";
// } else {
//     color = "green"
// }

userStatus === "offline" ? color = "red" : color = "green";
console.log (color);

let shoppingList = ["cheezits", "bananas", "nuts", true, 17]
shoppingList.push ("milk");
shoppingList.pop ()
shoppingList.shift ()
shoppingList.unshift ("skittles")
shoppingList.splice (1, 0, "yugort")
let newList = shoppingList.slice (1,3);
console.log (newList);



