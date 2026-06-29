let calculator = {
  addition: { a: 2, b: 3 },
  subtraction: { a: 5, b: 2 },
  multiplication: { a: 4, b: 3 },
  division: { a: 10, b: 2 },
  exponentiation: { a: 2, b: 3 },
  remainder: { a: 10, b: 3 },
  increment: { a: 5 },
  decrement: { a: 5 },
};

function performCalculations(calculator) {
  let addition = calculator.addition.a + calculator.addition.b;
  console.log(
    `Addition: ${calculator.addition.a} + ${calculator.addition.b} = ${addition}`,
  );
  let subtraction = calculator.subtraction.a - calculator.subtraction.b;
  console.log(
    `Subtraction: ${calculator.subtraction.a} - ${calculator.subtraction.b} = ${subtraction}`,
  );
  let multiplication =
    calculator.multiplication.a * calculator.multiplication.b;
  console.log(
    `Multiplication: ${calculator.multiplication.a} * ${calculator.multiplication.b} = ${multiplication}`,
  );
  let division = calculator.division.a / calculator.division.b;
  console.log(
    `Division: ${calculator.division.a} / ${calculator.division.b} = ${division}`,
  );
  let exponentiation =
    calculator.exponentiation.a ** calculator.exponentiation.b;
  console.log(
    `Exponentiation: ${calculator.exponentiation.a} ** ${calculator.exponentiation.b} = ${exponentiation}`,
  );
  let remainder = calculator.remainder.a % calculator.remainder.b;
  console.log(
    `Remainder: ${calculator.remainder.a} % ${calculator.remainder.b} = ${remainder}`,
  );
  let increment = ++calculator.increment.a;
  console.log(`Increment: ${increment}`);
  let decrement = --calculator.decrement.a;
  console.log(`Decrement: ${decrement}`);
}

performCalculations(calculator);
