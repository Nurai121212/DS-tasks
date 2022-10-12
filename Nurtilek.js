//Арифметические операции с помощью функций

const plus = (rightOperand) => (leftOperand) => leftOperand + rightOperand;
const minus = (rightOperand) => (leftOperand) => leftOperand - rightOperand;
const times = (rightOperand) => (leftOperand) => leftOperand * rightOperand;
const dividedBy = (rightOperand) => (leftOperand) => Math.floor(leftOperand / rightOperand);

const calculation = (num) => (operation) => operation ? operation(num) : num;

const nums = [];

for(let i = 0; i < 10; i++){
  nums.push(calculation(i))
}

const [zero, one, two, three, four, five, six, seven, eight, nine] = nums

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
  let [a, b] = [0, 1];

  while(a * b < target){
    [a, b] = [b, a  + b]
  }
  
  return [a, b, target === a * b]
};

console.log(fibonacciCombination(714));