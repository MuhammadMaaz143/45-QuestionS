import { Z_DEFAULT_COMPRESSION } from "zlib";

// Define variables
let apple = 'apple';
let uppercaseApple = 'APPLE';
let ten = 10;
let twenty = 20;
let fruits = ['Apple','Banana','Orange'];

// test for equality and inequality witrh strings

console.log('\nis apple is equal to apple?');
console.log(apple == 'apple');

console.log('\nis apple is not equal to apple?');
console.log(apple != 'apple');

// test lowerCase function
console.log('\nis apple is equal to apple after converting to lowerCase?');
console.log(uppercaseApple.toLowerCase() == 'apple');

console.log('\nis apple is equal to apple after converting to lowerCase?');
console.log(uppercaseApple.toLowerCase() !='apple');

// Numerical tests
// equal to
console.log('\n is ten is equal to twenty?');
console.log(ten == twenty);

// not equal to
console.log('\n is ten is not equal to twenty?');
console.log(ten != twenty);

// Grather than
console.log('\n is ten is grather than zero?');
console.log(ten > 0);

// less than
console.log('\n is twenty is less than 10');
console.log(twenty < 10);

// Grather than or equal to
console.log('\n is ten is grather or equal to 5?');
console.log(ten >= 5);

// less than or equal to
console.log('\ntwenty is less than or equal to 10');
console.log(twenty <=10);

// Tests using 'and' 'or' operators

// Using && (and)
console.log('\ntwenty is not equal to 10 and twenty is grather than 10');
console.log(twenty != 10 && twenty > 10);

console.log('\ntwenty is not equal to 10 and twenty is grather than 10');
console.log(twenty != 10 && twenty > 30)

// Using || (OR)
console.log('\ntwenty is grather than 50 OR 20 is equal to 20');
console.log(20 > 50 || 20 ==20);

console.log('\ntwenty is grather than 50 OR 20 is not equal to 20');
console.log(20 > 50 || 20 !=20);

// tests whether an items is include in array
console.log('is orange include in my fruits array');
console.log(fruits.includes('Orange'));

// not include
console.log('\nis Orange not include in my fruits array');
console.log(!fruits.includes('Orange'));