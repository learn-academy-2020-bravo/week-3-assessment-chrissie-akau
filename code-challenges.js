// // // ASSESSMENT 3: Coding Practical Questions


// // --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. 

//create a function that takes in a number
const fibSequence = (number) => {
   //create a varaible for the number
   let n = number
   //if/else statement, starting with if the number is one...
      if (n===1)
    {
       //  return one repeated and makes sure 0 is not present in final array technically the Fiboncacci sequence does start with 0, in that case, you would change the return to [0,1] and the number to 10 in the console.log argument
      return [1,1]
   //else statement that creates a variable called otherNums and has other nums get pushed into a new array after taking the previous index and adding it to the next index, which will then give us the next number in the index.
   }else{
      let otherNums = fibSequence(n-1)
      otherNums.push(otherNums[otherNums.length - 1] + otherNums[otherNums.length - 2])
      return otherNums
   }
}

console.log(fibSequence(9))
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

//create a function that takes in a mixed array 
const oddOnly = (array) => {
   //create a new variable and use .filter to obtain only the numbers in the mixed array using typeof method AND finding only the odd numbers by seeing if the reamidner of the value is other than 0
   let numsOddOnly = array.filter(value => typeof value === "number" && value % 2 !==0)
      //reutrn only the odd numbers and sort from least to greatest with the .sort method
      return numsOddOnly.sort((a,b)=>a-b)
}
console.log(oddOnly(fullArr1))
// Expected output: [-9, 7, 9, 199]
console.log(oddOnly(fullArr2))
// Expected output: [-823, 7, 23]



// // --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
var middleLetters2 = "rhinoceros"

//create a function that takes in a string
const singleString = (string) => {
   //create a new variable that holds the string split into an array using the .split method
   let splitString = (string).split("")
   //if statement seeing if splitString has an even number of letters
   if (splitString.length % 2 === 0 ) {
      //return the two middle letters by adding the index to the left of the middle letter and the middle letter together in order to return both middle letters
      return splitString[Math.floor(splitString.length/2)-1] + splitString[Math.floor(splitString.length/2)]
   //else is if statement seeing if splitString is odd number of letters
   }else if (splitString.length % 2 !== 0) {
      //returning only the midde letter
      return splitString[Math.floor(splitString.length/2)]
   }
}


console.log(singleString(middleLetters1))
// // Expected output: “l”
console.log(singleString(middleLetters2))
// // Expected output: “oc”



// // --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//create a class called sphere 
class Sphere {
   //add a constructor with radius, the only variable that can be changed
   constructor(radius) {
      this.radius = radius
   }
   //create a variable that will return the area formula and calls on this.radius to provide the radius
   area () {
      return (4 * Math.PI * this.radius**2).toFixed(4)
   }
}
var sphereOne = new Sphere(200)
console.log(sphereOne.area())

var sphereTwo = new Sphere(57)
console.log(sphereTwo.area())

var sphereThree = new Sphere(9)
console.log(sphereThree.area())



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
var numbersToAdd2 = [0, 7, -8, 12]
var numbersToAdd3 = []

//create a function that takes in an array
const accumulatingSum = (array) => {
   //create a new array with the new numbers
  let newArray = []
  //use .reduce and have three arguments, the previous number, current number and the index.  Have the new indexes get pushed into the new array and the new numbers will be the previous number plus the current number, and we want to start accumulating at 0
  array.reduce((previousNum, currentNum, i) => newArray[i] = previousNum +currentNum, 0)
  return newArray
} 

console.log(accumulatingSum(numbersToAdd1))
// Excpected output: [2, 6, 51, 60]
console.log(accumulatingSum(numbersToAdd2))
// Expected output: [0, 7, -1, 11]
console.log(accumulatingSum(numbersToAdd3))
// Expected output: []
