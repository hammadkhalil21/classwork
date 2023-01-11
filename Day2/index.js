// alert ("test")

let firstName="Greg";
console.log(firstName);

let dogsName="Sammy's";
console.log(dogsName);

let turtleName=`my dogs name is ${dogsName}`;
console.log(turtleName);

let luckyNum = 7;
console.log(typeof dogsName);

let active = true;
console.log (typeof active, active);

let test1 = null;
console.log (typeof test1, test1, active, luckyNum);

luckyNum = 12;
console.log (luckyNum);

const luckyNum2 = 8;
console.log (luckyNum2);

// luckyNum2 = 1;
const numCheck = (-1===1);
console.log (numCheck);

const check2 = (firstName == dogsName);
console.log (check2);




const fakeNum = "12"
const mathCheck = (luckyNum === fakeNum);
console.log (mathCheck);

const mathCheck2 = (6 - 3);
console.log (mathCheck2);

const mathCheck3 = (7 / 4);
const mathCheck4 = (6 + 7);
const mathCheck5 = (4 * 2) + (3 - 1);

console.log (mathCheck3, mathCheck4, mathCheck5);

const mathcheck6 = (7%2 === 0);
console.log (mathcheck6);

luckyNum ++;
luckyNum -=luckyNum2;
console.log (luckyNum);

var hamsteName = "Johnny";

let movieReview = 42; 
movieReview += 2;
console.log (movieReview);

const currentInvest = 5.5;
// currentInvest = 8;

let maxFunds = 100;
maxFunds += 5;
maxFunds --;
console.log (maxFunds);

let snack = "cheezits";
// console.log(snack.toUpperCase());
let newSnack = snack.toUpperCase();
console.log(newSnack);

snack = snack.toUpperCase();

let greeting = "        Hi     ";
console.log(greeting.trim().toUpperCase());

let restaurant = "AppleBees";
console.log (restaurant);
let newRestaurant = restaurant.indexOf("z"); //Returns a "-1" if not found
console.log(newRestaurant);

let sport = "baseball";
console.log(sport.indexOf("b"));

let song = "twinkletwinkle";
console.log(song.slice(1,5));