import './style.css'
// 1. Count of positives / sum of negatives

// let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// let returnArr = []
// let numberOfPositiv = 0
// let sumOfNegativ = 0


// for (let i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] >= 0) {
//         numberOfPositiv += 1;
//     }
    
// }
// returnArr.push(numberOfPositiv)

// for (let j = 0; j < arrNumbers.length; j++) {
//     if (arrNumbers[j] < 0) {
//         sumOfNegativ += arrNumbers[j]
//     }
    
// }
// returnArr.push(sumOfNegativ)
// console.log(returnArr)



// 2. Ever or Odd

// function EvenOrOdd(number){
//     if (number % 2 === 1) {
//         console.log("Odd")
//     } else {
//         console.log("Even")
//     }
// }
// EvenOrOdd(1)



// 3. Find the Difference in Age between Oldest and Youngest Family Members



// function differenceBetweenAges(arr){

// let youngest = arr[0];
// let oldest = 0;
// let diff = 0;

// let resultArr = []

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < youngest) {
//            youngest = arr[i]
//         }
        
//     }
//     resultArr.push(youngest)

//     for (let j = 0; j < arr.length; j++) {
//         if (oldest < arr[j]) {
//             oldest = arr[j]
//         }
        
//     }
//     resultArr.push(oldest)

//     diff = oldest - youngest
//     resultArr.push(diff)

//     return resultArr
// }
// console.log(differenceBetweenAges([11,8,45,72,57,41,15]))


// Number Pairs

// let arr1 = [13, 64, 15, 17, 88]
// let arr2 = [23, 14, 53, 17, 80]


// let currentNumber1 = arr1[0]
// let currentNumber2 = arr1[0]
// let largestNumbers = []

// for (let i = 0; i < arr1.length; i++) {

//     if (arr1[i] > arr2[i]) {
//         largestNumbers.push(arr1[i])
//     } else {
//         largestNumbers.push(arr2[i])
//     }


// }
// console.log(largestNumbers)


// Maze Runner

// function maze(roomPatern){
//     let currentRoom
//     let nextRoom
//     let changeLight

//     let result = ""

//     for (let i = 0; i < roomPatern.length; i++) {
//         if (roomPatern[i] === "x") {
//             console.log("The light isn't on, you can continue")
//         } else if (roomPatern[i] === " ") {
//             console.log("It's really dark in there, you can continue")
//         } else {
//            return console.log("They saw you ! It's over now")
//         }
//     }

// }

// maze("xo oxox")


// length

// function findLength(str, numberFind) {
//     let counter = 0
//     let flag = false
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === numberFind && flag === false){
//             flag = true
//             counter += 1
//         } else if (flag === true) {
//             counter += 1
//         }  else if (flag === true && str[i] == numberFind){
//             flag = false
//         }

//         console.log(counter)    
//     }
    
// }
// findLength([0, -3, 7, 4, 0, 3, 7, 9], 7)


// Round Robin Sorting

// let names = ["Sarah", "Charlie", "Mo"]
// let listofNames = ["Sarah", "Charlie", "Sarah", "Charlie", "Mo", "Mo", "Mo"]
// let rangedList = []

// names.sort();
// for (let i = 0; i < listofNames.length; i++) {
 
        
//         if (listofNames[i] === names[0]) {
//             rangedList.push(listofNames[i])
//         } else if (listofNames[i] === names[1]) {
//             rangedList.push(listofNames[i])
//         } else {
//             rangedList.push(listofNames[i])
//         }
//         console.log(rangedList)

    
    
// }
// console.log(rangedList)


// Length Sequence

// function find(arr, numb){
//     let flag = false
//     let counter = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] === numb && flag === false) {
//             flag = true
//         } else if (arr[i] === numb && flag === true) {
//             flag = false
//         }

//         if (flag === true) {
//             counter ++
//         }
        
//     }
//     counter +=1
//     console.log(counter)
//     return counter

// }
// find([0, -3, -3, 4, 0, 3, 7, 0], -3)











// Simple decrypt

// let cryptedStr = '$aaaa#bbb*cc^fff!z'

// const cryptedStr1 = new Map();
// for (let i = 0; i < 26; i++) {
//     cryptedStr1.set(String.fromCharCode(97+i),String(0))
    
// }

// for (let j = 0; j < cryptedStr.length; j++) {
//     if (cryptedStr1.has(cryptedStr[j]) === true) {
//         let letterValue = cryptedStr1.get(cryptedStr[j])
//         const numberValue = Number(letterValue)


//         cryptedStr1.set(cryptedStr[j], String(numberValue+1))
//     } 

// }

// let results = ""
// let iterator1 = cryptedStr1.values();

// for (let k = 0; k < 26; k++){

//     const lettre = iterator1.next().value

//     results += lettre
    
// }

// console.log(results)



// Factorial division


// function factorialDiv(e,d){
//     let eResult = 1
//     let dResult = 1
//     let totalResult = 0;

//     for (let i = e; i > 0; i--) {
//         eResult *= i
//     }

//     for (let j = d; j > 0; j--) {
//         dResult *= j
//     }
    

//     totalResult = eResult/dResult
//     console.log(dResult)
//     console.log(eResult)
//     console.log(totalResult)
//     return totalResult
// }
// factorialDiv(6,5)
