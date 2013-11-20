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
// wrote it, but now it's making more sense to me. -lh
var startYear = 1200;
var endYear = 2020;
for (i=startYear; i<=endYear; i++) {
    if ((i%4 === 0 && i%100 !== 0) || (i%400 === 0)) {
        console.log(i);
        }
}






// Here is the test I used to check that the leap year logic works.
// See if you can figure out what's going on. 

//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
validLeapYears = [1804 , 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848, 1852, 1856, 1860, 1864, 1868, 1872, 1876, 1880, 1884, 1888, 1892, 1896, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2104, 2108, 2112, 2116, 2120, 2124, 2128, 2132, 2136, 2140, 2144, 2148, 2152, 2156, 2160, 2164, 2168, 2172, 2176, 2180, 2184, 2188, 2192, 2196, 2204, 2208, 2212, 2216, 2220, 2224, 2228, 2232, 2236, 2240, 2244, 2248, 2252, 2256, 2260, 2264, 2268, 2272, 2276, 2280, 2284, 2288, 2292, 2296, 2304, 2308, 2312, 2316, 2320, 2324, 2328, 2332, 2336, 2340, 2344, 2348, 2352, 2356, 2360, 2364, 2368, 2372, 2376, 2380, 2384, 2388, 2392, 2396, 2400 ] 
var startYear = 1804;
var endYear = 2400;
for (i=startYear; i<=endYear; i++) {
	if ((i%4 === 0 && i%100 !== 0) || (i%400 === 0)) {
		// remove the year from validLeapYears to signify that we have seen it
		var index = validLeapYears.indexOf(i);
		validLeapYears.splice(index, 1);
	}
}
console.log(validLeapYears.length == 0);
