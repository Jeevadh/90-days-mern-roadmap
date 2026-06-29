let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied


//subtraction
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

//Remainder %
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4


//Exponentiation **
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16


//string concatenation
let s = "my" + "string";
alert(s); // mystring

eg:
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

//Assignment = returns a value

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

//chained assignment
let a, b, c;
a = b = c = 2 + 2;  // 4 is the output
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

//Increment / decrement
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1  

// If the result of increment/decrement is not used, there is no difference in which form to use:

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

let counter = 0;
alert( ++counter ); // 1
// If we’d like to increment a value but use its previous value, we need the postfix form:

let counter = 0;
alert( counter++ ); // 0






//Practice: What is the output of these expressions?
"" + 1 + 0  // 1
"" - 1 + 0  // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // -9 5
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2