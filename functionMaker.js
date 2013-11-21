//make a function that takes in any string and returns the string reversed

// I had to read a lot and play a lot to figure out how to make this work. -lh
function reverse(word) {
    var split = word.split("");
    var rev = split.reverse("");
    join = rev.join("");
    console.log(join);
}
reverse("example");
