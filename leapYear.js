//  Leap Years. 

//  Leap years are years divisible by four (like 1984 and 2004). 
//  Years divisible by 100 are not leap years (such as 1800 and 1900), 
//  unless they are divisible by 400 (like 1600 and 2000).

//  Write a program which has variables for startYear and endYear.

//  Then console.log all of the leap years between the starting year and ending 
//  year (and include starting year/ending year if they are also leap years).

//  Yes, it's all pretty confusing, but not as confusing as having July in the middle of the 
//  winter, which is what would eventually happen.

// (Lobsterhands) I *think* I followed instructions, but let me know.
// This works, but I'm not 100% clear on why, specifically in the if/else if
// lines 22-26. I guess it's the two console.logs and in that order that
// are tripping up my mind. Seems that it shouldn't work the way it does. -lh

var startYear = 1200;
var endYear = 2020;
for (i=startYear; i<=endYear; i++) {
    if (i%4 === 0) {
        if (i%400 === 0)
        console.log(i);
        else if (i%100 !== 0)
        console.log(i);
    }
}

// More concise version. I'm leaving the original so you can see how my mind works.
// Also, line 37 was trial and error. I didn't know 100% why it worked when I first
// wrote it, but now it's making more sense to me.
var startYear = 1200;
var endYear = 2020;
for (i=startYear; i<=endYear; i++) {
    if ((i%4 === 0 && i%100 !== 0) || (i%400 === 0)) {
        console.log(i);
        }
}

