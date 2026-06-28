// String quotes

let name = "Ilya";

alert( `hello ${1}` ); // output is "hello 1"

alert( `hello ${"name"}` ); // output is hello name 

alert( `hello ${name}` ); // output is hello Ilya 


// Number ()

Number("100")     // 100
Number("10.5")    // 10.5
Number("")        // 0
Number("abc")     // NaN
Number(true)      // 1
Number(false)     // 0

// String()


String(100)       // "100"
String(true)      // "true"
String(null)      // "null"
String(undefined) // "undefined"

// Boolean()


Boolean("")          // false
Boolean("Hello")     // true
Boolean(0)           // false
Boolean(1)           // true
Boolean(-1)          // true
Boolean(null)        // false
Boolean(undefined)   // false
Boolean(NaN)         // false
Boolean([])          // true
Boolean({})          // true


// Important Tricks

typeof NaN
// "number" (NaN stands for "Not a Number", but its datatype is number.)

NaN === NaN
// false (NaN is the only value in JavaScript that is not equal to itself.)

Number.isNaN(NaN)
// true

null == undefined
// true (null == undefined is true because loose equality (==) considers them equal.)

null === undefined
// false 

typeof typeof 100
// "string"(typeof 100 returns "number" (a string). Then typeof "number" is "string".)
