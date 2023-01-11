let fruit = "Orange";
let color = fruit;
fruit = "watermelon";
console.log(fruit, color);

let nums = [5,6,7,8];
let otherNums = nums;
nums.push(9);
console.log(otherNums);

let x = 34;
x += 5; 
console.log(x);

// const state = "california";
// state = "arizona";
// console.log(state);

const myEggs = ["brown", "brown"];
myEggs.push("green");


// myEggs = ["black", "blue"];
console.log(myEggs);

const foods = ["ground beef"];
foods.push("taco shells");

const colors = [
    ["red", "green"],
    ["orange", "purple"],
    ["blue", "navy blue"]
]
console.log(colors);
colors[1][1];

const gameBoard = [
    ["o",null,"x"],
    [null, "x", "o"],
    ["x", "o", null]
]

const colors2 = [
    ["red", ["green", "lime green"]],
    ["orange", "purple"],
    ["blue", "navy blue"]
]
console.log(colors2[0][1][1])
const fitbitData = [
    1234, 
    15000,
    140
]
const fitbitData2 = {
    "total steps":1234,
    totalMiles : 15000,
    heartRate : 140
}
console.log(fitbitData2);

const gamePlayer = {
    playerName : "Super Dude",
    totalScore : 5000,
    color : "blue"
}
console.log(gamePlayer.playerName);
console.log(gamePlayer["totalScore"]);

const playerHighScore = {};

playerHighScore["super Dude"]=600;
playerHighScore["super Dude"] = 1000;
playerHighScore["super Dude"] += 1000;
console.log(playerHighScore);

const student = {
    firstName : "john", 
    lastName : "doe",
    strengths : ["math", "science"],
    examScores : {
        midterm :45,
        final : 81,
    }
}
console.log(student.examScores.midterm);
const avg = (student.examScores.midterm + student.examScores.final)/2;
console.log(avg);

const shoppingCart = [
    {
        product : "carrot",
        price : 1.25, 
        quantity : 1
    },
    {
        product : "beef jerky",
        price : 25,
        quantity : 2
    }
];
console.log(shoppingCart[0].price);

const game = {
    player1 : {
        username : "Greg",
        team : "x",
        color : "red"
    },
    player2 : {
        username : "Hammad",
        team : "y",
        color : "blue"
    },
    gameboard : [
        ["o",null,"x"],
        [null, "x", "o"],
        ["x", "o", null]
    ]
}
console.log(1===1);

const numbe = [1,2,3];
const numbe2 = numbe;
console.log(numbe===numbe2);

const user = {
    username : "",
    email : "",
    notifications : []
}
console.log(user.email === []);

console.log(user.notifications.length === 0);

for (let x = 0; x <= 10; x++) {
    console.log("hello")
}


for (let i = 5; i <= 10; i += 3){
    console.log("hello", i);
}

for (let j = 1; j <= 20; j++){
    // console.log(`${j} X ${j} = ${j*j}`)
    console.log(j*j);
}

for (let i = 100; i >= 0 ; i -= 5){
    console.log ("hello", i)
}
for (let i = 200; i >= 0; i -= 25){
    console.log("oops")
}

//beware infinite loop below
// for (let i = 20; i >= 0 ; i++){
//     console.log("oops")
// }

const animals = [
    "tiger", "bear", "lion", "dog"
]
for (let i = 0; i < animals.length; i++){
    console.log(i,animals[i]);
}

const bankNumbers = [
    {
        clientName : "Bruce Wayne",
        finances : 1000000
    },
    {
        clientName : "Clark Kent",
        finances : 1000
    },
    {
        clientName : "Peter Parker",
        finances : 50
    },
    {
        clientName : "Black Adam",
        finances : 1
    }
]

for (let i = 0; i < bankNumbers.length; i++){
    console.log(`${bankNumbers[i].clientName} makes ${bankNumbers[i].finances}`)
}

for (let i=0 ; i < bankNumbers.length; i++){
    let currentClient = bankNumbers[i];
    console.log(`${currentClient.clientName} makes ${currentClient.finances}`);
}
const ourPhrase = "racecar";
for (let i = ourPhrase.length-1; i >= 0; i--){
    console.log(ourPhrase[i]);
}

let total = 0;
// for (let i = 0; i < bankNumbers.length; i++){
//     let currentClient = bankNumbers[i];
//     total += currentClient.finances;
// }
console.log(total);

for (let i=1; i <= 10; i++){
    console.log ("outerloop", i)
    for (let j=10; j >=0; j-=2){
        console.log("innerloop", j)
    }
}

const gameBoard1 = [
    [12,5,19,82], 
    [64,12,17,32],
    [21,81,32,19]
]

for (let i=0; i < gameBoard1.length; i++){
    let row = gameBoard1[i]

    for (let j=0; j < row.length ; j++){
        total += row[j]
 
   }
}
console.log(total);