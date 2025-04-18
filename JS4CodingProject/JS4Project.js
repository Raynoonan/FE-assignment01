// 1. Create an array called ages that contains the following values:
// 3, 9, 23, 64, 2, 8, 28, 93

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)

    // 1. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    // Do not use numbers to reference the last element, find it programmatically.
    // ages[7] - ages[0] is not allowed!

    subtractAge = ages[ages.length-1] - ages[0]
    console.log("subtracted age = " +subtractAge)

     //2. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    //3. Use a loop to iterate through the array and calculate the average age.

    ages.push(80)
    subtractAge = ages[ages.length-1] - ages[0]
    console.log("subtracted age after push= " + subtractAge)

    let sum = 0
    for(i = 0; i < ages.length; i++ ) {
        sum += ages[i]
    }
    console.log("Average number:", average = sum / ages.length)
    
//  2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names)

    // 1. Use a loop to iterate through the array and calculate the average number of letters per name.

    let nameLength = 0;
    for(i = 0; i < names.length; i++ ) {
        nameLength += names[i].length
    }
    console.log("Average Name length:", average = nameLength/ names.length)

    // 2. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

    let concatenateNames = ' '
    for(i = 0; i < names.length; i++ ) {
        concatenateNames = concatenateNames.concat(names[i] + " ")
    }
    console.log(concatenateNames)

// 3. How do you access the last element of any array?
console.log("To acess the last element in an array you use .length - 1 since the last element of the array will always be the length minus one because arrays start at 0.")


// 4. How do you access the first element of any array?
console.log("To access the first element you do array[0], since the first index is always 0.")

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = []

for(i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths)

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let namesSum = 0;

for(i = 0; i < nameLengths.length; i++) {
    namesSum += nameLengths[i]
}

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function repeatWord(word, n) {
 let concat = word.repeat(n)
 console.log(concat)
}

repeatWord("Ray", 9)

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    fullName = firstName.concat(" " ,lastName)
    console.log(fullName)
}

fullName("Josh", "Bean")

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numbers1 = [50, 1, 10]

function numbersArray(array) { 
let total = 0;

for(let i= 0; i < array.length; i++) {
  total += array[i]
  console.log("total:",total)
  
}
  if(total > 100)  {
    console.log(true)
    return true
    
   } else {
    console.log(false)
    return false
   }
}
numbersArray(numbers1)

// 10. a function that takes an array of numbers and returns the average of all the elements in the array.

let numbers2 = [80, 75, 45, 30]
sum = 0
function arrayAverage(array) {
    for(i= 0; i < array.length; i++) {
      sum += array[i]
    }
    console.log("Average :" , sum / array.length)
}
arrayAverage(numbers2)

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let array1 = [1, 5, 6, 7, 10]
let array2 = [6, 3, 4,]

function twoAverages(arr1, arr2) { 
let average = 0;
let average2 = 0;


    for(let i= 0; i < arr1.length; i++) {
        average += arr1[i]
       
    }
    console.log("Array 1 average :",average / arr1.length)

    for(let i= 0; i < arr2.length; i++) {
            average2 += arr2[i]
            
    }
    console.log("Array 2 average : " , average2 / arr2.length)

    if(average > average2) {
        console.log(true)
        return true
    } else { 
        console.log(false) 
        return false 
    }
}
twoAverages(array1, array2)

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 
function willBuyDrink(isHotOutside, moneyInPocket) {
    if( isHotOutside === true && moneyInPocket > 10.50) {
        console.log(true)
        return true
    } else { 
        console.log(false)
        return false 
}
}
willBuyDrink(true, 9.50)

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it

function shouldWeGetDinner(isWeekend, isAWorkNight, bankAccount) {
    if(isWeekend === true || isAWorkNight === false && bankAccount > 200) {
        console.log("We can go to Dinner")
        return true
    } else {
        console.log("We have to stay home")
        return false
    }
}
shouldWeGetDinner(false, true, 100)

//The function I created called shouldWeGetDinner decides if the situation is right to eat out.
//if its not a work night we can or if it's the weekend and if our bank account is more than $200
