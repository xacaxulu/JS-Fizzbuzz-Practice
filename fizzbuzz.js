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
