//Арифметические операции с помощью функций

const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

const operations = {
  plus: "+",
  minus: "-",
  times: "*",
  dividedBy: "/"
};

for(const key in operations) {
  eval(`function ${key}(rightOperand) { 
    return (leftOperand) => Math.floor(leftOperand ${operations[key]} rightOperand);  
  }`);
};

for(const key in numbers) {
 eval(`function ${key}(operation) {
    return operation ? operation(${numbers[key]}) : ${numbers[key]}; 
  }`)
};

console.log(eight(dividedBy(three())));


//Сложение строк

function sum(leftOperand, rightOperand){
  let res = eval(`${leftOperand} + ${rightOperand}`);

  return res.toString()
}

console.log(sum('12', '34'));


//Fibonacci Combination

const findFibonacciCombination = (target) => {
  let a  = 1;
  let b = 1;

  for(let i = 3; i > 0; i++){
    let c = a + b;

    if(a * b < target && target < b * c){
      return [b, c, false]
    }

    a = b;
    b = c;

    if(a * b === target){
      return [a, b, true]
    }
  }
};

console.log(findFibonacciCombination(714));