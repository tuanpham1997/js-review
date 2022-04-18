/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================
// Refer to line 49, driver would be Sabrina

// 1.) Declare a variable
// Answer: Let age = '26'

// 2.) Change the value of this variable
// Answer: age = '25'

// 3.) Change the data type of this variable
// Answer: age = 25

// 4.) Create another variable and the one from above to concatenate
// Answer: let name = "Tuan"

// 5.) Use any of the variables above or create new ones and print using string interpolation
// Answer: console.log(`My name is ${name} and I'm ${age} years old.`)

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================
// For Teo: Here, we decided the driver would copy and post the code to a group slack so the navigators can focus on learning and copy the driver's section after they're done. Oh, we decided to swap drivers after a section or two depending on section length.

// Driver: Kevin

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

// firstName = 'Sabrina'
// console.log(firstName.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

// Unicode is a universal character set that defines the list of characters from the majority of the writing systems, and associates for every character a unique number (code point)

// let teddyName = 'Teddy'

// console.log(teddyName.charCodeAt(2));

// Link of cheatsheet for unicode: https://en.wikipedia.org/wiki/List_of_Unicode_characters

// Using fromCharCode() - make it readable for us :). You'll see!

// console.log(String.fromCharCode(75, 101, 118, 105, 110));

// Take your first and last name and concat()

// let firstName = 'Kevin ';
// let lastName = 'Chen';
// let fullName = firstName.concat(lastName);
// console.log(fullName);

// Create a string and make it return true using startsWith()

// const string1 = 'Per Scholas'
// console.log(string1.startsWith('P'));

// Now use any variable with endsWith() and return false

// console.log(string1.endsWith('Scholars'));

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
// console.log(ozgur.includes('time'));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

// console.log(joshHadALittleLambOopsCow.indexOf('cow'));

// console.log(joshHadALittleLambOopsCow.charAt(149));

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."

// console.log(vanessa.lastIndexOf('Vanessa'));

// console.log(vanessa.charAt(39));

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
// console.log(noWeCantTeo.length)

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
// console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta'));

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
// console.log(joshIsLookingForWifey.search('wifey'));

// console.log(joshIsLookingForWifey.charAt(9));

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"

// console.log(pizzaSentence.indexOf('other half of pizza'));
// console.log(pizzaSentence.slice(7));

// Now using the pizza sentence, return only pizza (before the comma)

// console.log(pizzaSentence.slice(-5));

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
// console.log(splitTheBill.split(','));


// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.

// console.log(splitTheBill.split(''))

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 

// console.log(angry.toLowerCase());

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"

// console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"

// console.log(basicGreeting.substring(1 , 4));

// Returns "JavaScript"
const ohReally = "JavaScript Substring"

// console.log(ohReally.search(' Substring'))
// console.log(ohReally.substring(0, ohReally.search(' Substring')));


// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"

// console.log(aslDays.substring(aslDays.indexOf('aol')));

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.

// let newVar1 = '        extra loving           '
// console.log(newVar1.trim());
// =================================================
//                     BOOLEAN
// =================================================
// Driver: James

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d === d)  // or >=
// console.log(d != a)
// console.log(a <15)
// console.log(a + b == c)  //or  < <
// console.log(c * b / a != d)  //or !==
// console.log(c - b - a !== d) 


// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

// for(let i = 0; i < 10; i++){
//   console.log('spin x10')
// }
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// for(let i = 0; i < 20; i++){
//   console.log('spin x20')
// }

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// let i = 0
// while(i<20){
// console.log('Im sorry!')
// i++
// }

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 
// for (variable1 in object) {
//   statement
// }    FORIN

// for (variable of iterable) {
  // statement
// } FOROF

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}

// for( const dog in whateverQueenBeySaid){
// console.log(dog,whateverQueenBeySaid[dog])     -------Alternative
// }

// console.log(whateverQueenBeySaid['thing2'])


// console.log(Math.floor(Math.random()* 2)+1)     // self notes

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']

// for(let letters in lana){
// console.log(letters,lana[letters])
// }

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

// for(words of tia){
//   // // words = words + "L"
//   console.log(words)
// }

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']



// perscholas.forEach(element => console.log(element+notPs),notPs = "PS");


// for(){
//   forEach
// }
// =================================================
//                     ARRAYS
// =================================================
// Driver: Harry

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

const fruits = ['apple', 'banana', 'orange']

// Print banana
// console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use.

// Join all the elements of the array into a string separated by a space.
// join()
// join(separator)
// console.log(fruits.join(" "))

// Remove orange
// splice(start, deleteCount)
// console.log(fruits.splice(2))
// console.log(fruits.pop())
// console.log(fruits)

// Add strawberry, kiwi, and grapes at the end
// push(element0, element1)
// console.log(fruits.push("strawberry", "kiwi", "grapes"))
// console.log(fruits)

// Remove apple
// splice(start, deleteCount)
// console.log(fruits.splice(0,1))
// console.log(fruits)

// Add mango at the beginning of the array
// console.log(fruits.splice(0, 0, 'mango'))
// console.log(fruits)

// Add lemon, and grapefruit between mango and banana
// console.log(fruits.splice(1, 0, 'lemon', 'grapefruit'))
// console.log(fruits)

// Remove banana and strawberry
// console.log(fruits.splice(3 , 2))
// console.log(fruits)

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
// const array3 = array1.concat(array2);
const exoticFruits = ['durian', 'persimmon', 'jackfruit']
const superFruit = exoticFruits.concat(fruits);
// console.log(superFruit);

// Print the last two exotic fruits without altering the newly concatenated array.
// console.log(superFruit.slice(1, 3));

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
// months.sort();
// console.log(months);
// monalissaIsMessy.sort();
// console.log(monalissaIsMessy);

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// console.log(mirrorMirrorOnTheWall.reverse());

// ===== HIGHER ORDER METHODS =====
// Driver: Tuan Pham

// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const filterd = RafaelNoBadWords.split(' ')
// console.log(filterd)
// console.log(filterd.filter(bad => bad !== 'badword').toString().replaceAll(',', ' '))
// console.log(filterd.filter(bad => bad !== 'badword').join(' '))
//  console.log(RafaelNoBadWords.replaceAll('badword','')) // Leaves a double space in place of 'badword' because it's consecutive


// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
// console.log(numbersToAddUp.reduce((previousValue, currentValue) => previousValue + currentValue))

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const tom = [...monalissaIsMessy]
// console.log(tom)
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const sawyer = [...exoticFruits, 'Harry is hungy']
const forFun = [ 46, 101, 24, 7]
const arr1 = [...sawyer, ... forFun]
// console.log(arr1)
// Using the variable with the newly connected arrays, use spread operator to add something at the end.
//  arr1.push(...numbersToAddUp)
// console.log(arr1)

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
// arr1.unshift(...mirrorMirrorOnTheWall)
// console.log(arr1)

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
// console.log(donutShop[1][0][1])
// Tosi wants ihatethis. :) Print!
// console.log(donutShop[2][0][0][1][0])
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
let teo = "person"
let teoGender = 'male'
let teoHunger = true
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
//  if(teo === 'person'){
//    console.log('Teo is a person!')
//    if ( teoGender === 'male'){
//      console.log('You got it right!')
//      if( teoHunger ) {
//        console.log('Let\'s buy Teo some tacos!')
//      } else {
//        console.log('He doesn\'t need to eat')
//      }
//    } else{
//      console.log('Wrong. Teo is going to remove you from the class.')
//    }
//  } else {
//   console.log('Teo is not a person!')
//  }
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// refer to line 427
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
// refer to line 427
// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
// let gusCoolness = "the coolest"
// gusCoolness === 'the coolest' ? console.log('You got that right!') : console.log('James wants to argue. He says he\'s the best')

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
// function sayGreeting(){
//   console.log('Hello, ma\'amsir!')
// }
// sayGreeting()
// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
// function stringParameter(word){
//   console.log(`This is my ${word}`)
// }
// stringParameter (9)

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
// function add (x,y,z){
//   let sum = x + y + z
//   console.log(`The sum of ${x}, ${y}, and ${z} is ${sum}`)
// }
// add(4,2,7)
// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
// function fightClub(name){
//   if (name === 'Teo'){
//     return '1st rule: You do not talk about Fight Club.'
//   } else if (name === 'Manara'){
//     return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
//   } else if (name === 'Liv'){
//     return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
//   } else if (name === 'Devin'){
//     return '4th rule: Only two guys to a fight.'
//   } else {
//     return 'No shirts'
//   }
// }
// let kevin = fightClub('Teo')
// console.log(fightClub('Manara'))
// console.log(fightClub('Liv'))
// console.log(fightClub('Devin'))
// console.log(fightClub('James'))
// // Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
// function sayHello(){
//   console.log('Hello')
//       return sabrina => console.log('Goodbye')
// }
// sayHello()()
// Driver: Sabrina

// Create a function expression with your first name as the variable and then print your first and last name
// Sabrina's full name, Sabrina Angelle, will be used for this exercise 
const myName = function(firstName){
  console.log(firstName, 'Angelle')
}

myName('Sabrina')
// Create an arrow function that accepts a number and have it return that number doubled
// para1 = (x) => console.log(x * 2)
// para1(5);
// =================================================
//                     OBJECTS
// =================================================
// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const human = {
  name: 'James Jr.',
  age: 56 ,
  location: 'Mars',
}
// Access the name using dot notation
console.log(human.name)
// Access the age using square brackets
console.log(human['age'])
// Use object destructuring to access location
// const {name, age, location} = human
// console.log(location)
// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}
// Print overgrow
// console.log(bulbasaur.abilities[0].ability)
// // OR
// console.log(bulbasaur['abilities'][0]['ability'])
// Print cut
// console.log(bulbasaur.moves[2])
// Print Bulbahhhh!!!!!
// const {name, abilities, moves, sound} = bulbasaur
// sound()
// OR
// bulbasaur.sound()
// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
// bulbasaur.height = 7;
// console.log(bulbasaur)
// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
// bulbasaur['order'] = 1
// console.log(bulbasaur)
// Print an array that contains every single property in bulbasaur
// console.log(Object.keys(bulbasaur))
// Print every single property one by one in the console
for(const s in bulbasaur){
  console.log(s)
}
// Print an array that contains every single value in bulbasaur
console.log(Object.values(bulbasaur))