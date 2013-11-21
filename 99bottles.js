// 99 bottles
// Since you know how to use for loops now, 
// try to make a function that counts down from 99 to 0 and signs 99 bottles of beer on the wall.
//
// Fill in the details inside the loop to print the following:
//     ...
//     ...
//
//     3 bottles of beer on the wall
//     3 bottles of beer
//     take one down, pass it around
//     2 bottles of beer on the wall
//
//     2 bottles of beer on the wall
//     2 bottles of beer
//     take one down, pass it around
//     1 bottle of beer on the wall
//
//     1 bottle of beer on the wall
//     1 bottle of beer
//     take one down, pass it around
//     0 bottles of beer on the wall
//
// You will want to watch out for bottle vs bottles.

function sing() {
  console.log("Do something interesting");
}

sing();

// Lobsterhands writes: This was fun until it became difficult. This program works but
// I know there must be a *much* simpler way of writing it. Knowing this takes away some
// of my happiness at writing a working program. -lh

for (x=99; x>0; x--) {
    if (x === 1) {
        var y = "bottle";
    }
    else {
        y = "bottles";
    }
var saying = (x + " " + y + " of beer on the wall\n" + x + " " + y + " of beer\ntake one down, pass it around");
    if (x === 2) {
        y = "bottle";
    }
    else if (x === 1) {
        y = "bottles";
    }
var saying2 =((x-1) + " " + y + " of beer on the wall\n");
console.log(saying);
console.log(saying2);
}
