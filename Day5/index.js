// // const gameBoard1 = [
// //     [12,5,19,82], 
// //     [64,12,17,32],
// //     [21,81,32,19]
// // ]

// // for (let i=0; i < gameBoard1.length; i++){
// //     let row = gameBoard1[i]

// //     for (let j=0; j < row.length ; j++){
// //         total += row[j]
 
// //    }
// // }
// // console.log(total);

// // for (let i=0; i < 5 ; i++){
// //     console.log(i)
// // }

// // let j = 0;
// // while (j<=5){
// //     console.log(j);
// //     j++;
// // };

// // const target = Math.floor(Math.random()*10);
// // let guess = Math.floor(Math.random()*10);

// // while (guess !== target){
// //     console.log(`target number: ${target} Guest Number: ${guess}`)
// //     guess = Math.floor(Math.random()*10);
// // }
// // console.log(`target number: ${target} Guest Number: ${guess} You won!`)

// // for (let i= 0; i< 10; i++){
// //     console.log(i);
// //     if (i === 5){
// //         break;
// //     }
// // }

// // const target = Math.floor(Math.random()*10);
// // let guess = Math.floor(Math.random()*10);

// // while (true){
// //     if (target === guess)break;
// //     console.log(`target number: ${target} Guest Number: ${guess}`);
// //     guess = Math.floor(Math.random()*10);
// // }
// // console.log(`target number: ${target} Guest Number: ${guess} You won!`);

// const hobbies = ["basketball", "movies", "books", "running"]
// for (let i = 0; i< hobbies.length; i++){
//     console.log(hobbies[i]);
// }

// for (let hobby of hobbies){
//     console.log(hobby);
// }

// for (let letter of "cakes"){
//     console.log(letter);
// }

// const gameBoard1 = [
//     [8,1,6], 
//     [3,5,7],
//     [4,9,2]
// ]
// for (let i = 0; i < gameBoard1.length; i++){
//     let row = gameBoard1[i]
//     let sum = 0;
//     for (let j =0; j<row.length; j++){
//         console.log(row[j]);
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// for (let row of gameBoard1){
//     let sum = 0;
//     for (let num of row){
//         sum += num;
//     }
//     console.log (`${row} summed to ${sum}`);
// }

// const phraseOne = [
//     "caramel", "salted", "milk", "hot"
// ]

// const phraseTwo = [
//     "popcorn", "butter", "duds", "dogs"
// ]

// for (let firstPhrase of phraseOne){
//     let word = "";
//     for (let secondPhrase of phraseTwo){
//         console.log(secondPhrase);
//         word = secondPhrase;
//     }
//     console.log(`${firstPhrase} ${word}`)
// }

// for (let i = 0; i < phraseOne.length; i++){
//     console.log (`${phraseOne[i]} ${phraseTwo[i]}`);
// }

// const testScores = {
//     greg: 100, 
//     darsy: 75,
//     lori: 63,
//     erik: 72,
// }
// for (let person of testScores){
//     console.log(person);
// }

// console.log (Object.keys(testScores))
// console.log (Object.values(testScores))

// let total = 0;
// for (let person of Object.values(testScores)){
//     total += person;
// }

// let aver = (total / Object.values(testScores).length);
// console.log(aver);

// let total = 0;
// for (let person in testScores){
//     console.log(testScores[person])
//     total += testScores[person];
// }

// console.log(total);


// functions 
// console.log("hello world".toUpperCase());

// function jukeBox (){
//     console.log("hello world");
//     console.log("webdevs inc");
//     console.log ("i am hungry");
// }
// // console.log(jukeBox())
// // console.log(jukeBox())
// // console.log(jukeBox())
// for (let i = 0 ; i<= 4; i++){
//     console.log(jukeBox());
// }

// function ddDice (){
//     let roll = Math.floor(Math.random()*12 ) + 1; 
//     return(`dice roll ${roll}`)
// }

// function defensiveRolls (){
//     for (let i = 0 ; i< 4; i++){
//         console.log(ddDice());
//     }
// }

// function greet (){
//     console.log("hello World")
// }

function greet (name,age){
    console.log(name);
    console.log(`My name is ${name} and i am ${age} years old`);
}
greet("greg", 35);

function square (num){
    return console.log(num * num); 
}
square(17);

function sum (x,y){
    console.log (x+y);
}
sum(1,2);

function divide (x, y){
    return (x / y);

}

divide (2,4);
divide (4,2);

const total = divide(1,2)
console.log(total);

function square (num){
    return num * num; 
}

// function luckyNumber (num){
//     if (num === 12){
//         return true;
//     }
//     {
//         return false;
//     }
// }
// luckyNumber(12);

function luckyNumber(num){
    return num === 12;
}

function favSnack (snack){
    return snack.toLowerCase() === "cheezits";
}

const favSnacks = ["cheezits", "doritos", "cheetos"];
function newFavSnack (arr){
    for (let snack of arr){
        if (snack === "cheezits" || snack === "doritos"){
            return true;
        }
    }
    return false;
}
function passwordCheck (username, password){
    if (password.length < 10){
        return false;
    }
    if (password.indexOf(username) !== -1){
        return false;
    }
    if (password.indexOf(" ") !== -1){
        return false;
    }
    return true;
}