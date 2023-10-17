
//1.Do the below programs in anonymous function & IIFE

//a.Print odd numbers in an array
//anonymous function

let oddNumber = function (array){

    for( let i=0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            console.log(array[i]);}
        
    }
}

console.log(oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//IIFE

(function (array){

    for( let i=0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            console.log(array[i]);}
        
    }

})([1,2,3,4,5,6,7,8,9,10]);



// b.Convert all the strings to title caps in a string array
//anonymous function

let titleCaps = function(array){

    let array2 = [];
    
    for (let i = 0; i < array.length; i++) {
        array2.push(array[i].substring(0, 1).toUpperCase() + array[i].substring(1));
    }
    
    console.log(array2);
    
}

titleCaps(["guvi", "vinith", "train"]);


// IIFE

(function(array){

    let array2 = [];
    
    for (let i = 0; i < array.length; i++) {
        array2.push(array[i].substring(0, 1).toUpperCase() + array[i].substring(1));
    }
    
    console.log(array2);
    
    })(["guvi", "vinith", "train"]);

// C.Sum of all numbers in an array

//anonymous function

let sumOfAll = function(array){
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum+array[i];
    }
    
    console.log(sum);
}

sumOfAll([1,2,3,4,5,6,7,8,9,10]);

// IIFE
(function(array){
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum+array[i];
    }
    
    console.log(sum);
})([1,2,3,4,5,6,7,8,9,10]);


// d.Return all the prime numbers in an array

//anonymous function

let primeNumbers = function(array){

    let prime = [];

for (let i = 0; i < array3.length; i++) {
    let count = 0; 

    for (let j = 1; j <= array3[i]; j++) {
        if (array3[i] % j === 0) {
            count++;
        }
    }

    if (count === 2) {
        prime.push(array3[i]);
    }
}

console.log(prime);

}

primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 

//IIFE
(function(array3){

    let prime = [];

for (let i = 0; i < array3.length; i++) {
    let count = 0; 

    for (let j = 1; j <= array3[i]; j++) {
        if (array3[i] % j === 0) {
            count++;
        }
    }

    if (count === 2) {
        prime.push(array3[i]);
    }
}

console.log(prime);

})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// e.Return all the palindromes in an array

//IIFE


// f.Return median of two sorted arrays of the same size.

//IIFE


// g.Remove duplicates from an array

//IIFE
// h.Rotate an array by k times

// IIFE

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//2. Do the below programs in arrow functions.

//a.Print odd numbers in an array

let oddNumber = (array) => {

    for( let i=0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            console.log(array[i]);}
        
    }
}

oddNumber([1,2,3,4,5,6,7,8,9,10]);



//b.Convert all the strings to title caps in a string array
// Input values : ["guvi", "vinith", "train"]

let titleCaps = (array) =>{

    let array2 = [];
    
    for (let i = 0; i < array.length; i++) {
        array2.push(array[i].substring(0, 1).toUpperCase() + array[i].substring(1));
    }
    
    console.log(array2);
    
}

titleCaps(["guvi", "vinith", "train"]);


//c.Sum of all numbers in an array

let sumOfAll = (array)  => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum+array[i];
    }
    
    console.log(sum);
}

sumOfAll([1,2,3,4,5,6,7,8,9,10]);

//d.Return all the prime numbers in an array

let primeNumbers = (array) =>{

    let prime = [];

for (let i = 0; i < array3.length; i++) {
    let count = 0; 

    for (let j = 1; j <= array3[i]; j++) {
        if (array3[i] % j === 0) {
            count++;
        }
    }

    if (count === 2) {
        prime.push(array3[i]);
    }
}

console.log(prime);

}

//e.Return all the palindromes in an array
//Input values : [121, 1331, 55, 12321, 9876, 11]
