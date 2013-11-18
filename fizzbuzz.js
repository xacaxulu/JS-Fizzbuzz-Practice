// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number 
// and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// For Starters Lobsterhands, just write a program that prints the numbers from 1 to 100
// Do it in this file below these comments:

// If you don't have an environment set up yet thats okay. you can use http://repl.it/languages/JavaScript
// Then cut and paste the code here.

// I did this without looking anything up based on the little bit that I've learned so far. Feels good. -lh
var count = 0;
var plus1 = +1;
while (count <= 99) {
    count = count + plus1;
    console.log(count)}
// Thats great lobsterhands. Now what if we introduced a more concise way to do a loop like this:
for (var i=1;i<101;i++)
{ 
  console.log(i)
}
//that literally says, set var i to 1;while i is less than 101; increment i by one (literally just ad one to i)
//then the 'loop' part happens inside {}
// Using that loop style, rewrite fizzbuzz. 
//You should be happy about this: http://www.codinghorror.com/blog/2007/02/why-cant-programmers-program.html

//And after playing around a while, I got it. I learned that if I put the "FizzBuzz" part
//after the "Fizz" and "Buzz" sections, it wouldn't work properly. Order of events matters: noted. -lh
var count = 0;
var plus1 = +1;
while (count <= 99) {
    count = count + plus1;
    if (count%3 === 0 && count%5 === 0) {
        console.log("FizzBuzz");
    }
    else if (count%3 === 0) {
        console.log("Fizz");
    }
    else if (count%5 === 0) {
        console.log("Buzz");
    }
    else console.log(count);
}

//New fizzbuzz down here
//I dropped the [var i] part accidentally and just now realized it,
//but this works. Should I make it a point to use var anyway? -lh
for (i=1;i<101;++i) {
    if (i%3 === 0 && i%5 ===0) {
        console.log("FizzBuzz");
    }
    else if (i%3 === 0) {
        console.log("Fizz");
    }
    else if (i%5 === 0) {
        console.log("Buzz");
    }
    else {console.log(i)}
}
