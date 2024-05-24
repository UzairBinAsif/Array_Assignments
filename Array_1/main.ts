let fruits = ['apple', 'banana', 'mango', 'orange'];
let numbers: number[] = [10, 20, 30, 40];

fruits[2] = "thirdFruit"
numbers[1] = 25
fruits.push("grape")
fruits.pop(); fruits[4] = "lastFruit"
fruits.shift(); fruits[0] = "firstFruit"
fruits.unshift("kiwi")
fruits.splice( 1 , 2 )
//index to start , index to end removing

fruits.splice(     2    ,        0        , "pineapple","pear" )
//index to start adding , remove (if any) , datatypes to add (string/number,etc) 

let citrusFruits: any[] = []

citrusFruits.push(fruits[0], fruits[1])

let lastTwoFruits = [fruits[3], fruits[4]]

console.log(fruits);
console.log(numbers);
console.log(citrusFruits);
console.log(lastTwoFruits);