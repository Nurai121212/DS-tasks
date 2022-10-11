//Арифметические операции с помощью функций

function plus(rightOperand) { return function(leftOperand) { return leftOperand + rightOperand }};
function minus(rightOperand) { return function(leftOperand) { return leftOperand - rightOperand }};
function times(rightOperand) { return function(leftOperand) { return leftOperand * rightOperand }};
function dividedBy(rightOperand) { return function(leftOperand) { return Math.floor(leftOperand / rightOperand)}};

let calculation = function(num) {
  return function(operation) {
    return operation ? operation(num) : num
  }
};

let zero = calculation(0);
let one = calculation(1);
let two = calculation(2);
let three = calculation(3);
let four = calculation(4);
let five = calculation(5);
let six = calculation(6);
let seven = calculation(7);
let eight = calculation(8);
let nine = calculation(9);
 
console.log(eight(dividedBy(three())));

//Сложение строк

function sum(leftOperand, rightOperand){
  let greatest = leftOperand.length > rightOperand.length ? leftOperand : rightOperand;
  let smallest = leftOperand === greatest ? rightOperand : leftOperand;

  greatest = greatest.split('').reverse();
  smallest = smallest.split('').reverse();

  if(greatest.length > smallest.length){
    let oldLength = smallest.length;
    smallest.length = greatest.length;
    smallest.fill('0', oldLength, smallest.length)
  }

  let stack = [];
  let memoryNum = 0;

  for( let i = 0; i < greatest.length; i++){
    for(let j = i; j < smallest.length; j++){
      let currentSum = parseInt(greatest[i]) + parseInt(smallest[j])

      if(memoryNum !== 0){
        currentSum += memoryNum;
        memoryNum = 0
      }

      if(currentSum > 9){
        currentSum = currentSum.toString();
        memoryNum = parseInt(currentSum.substring(0, 1));
        stack.push(currentSum.substring(1))
      }else{
        stack.push(currentSum)
      }

      j = smallest.length;
    }
  }

  return stack.reverse().join('')
}

console.log(sum('128', '348'));


//Fibonacci Combination

const fibonacciCombination = (target) => {
  let a = 1, b = 1;

  while(true){
    let c = a + b;
    a = b;
    b = c;

    if(target === a * b || target < a * b){
      return [a, b, target === a * b]
    }
  }
};

console.log(fibonacciCombination(714));