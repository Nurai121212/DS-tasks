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



//Write a function, which takes a non-negative integer (seconds) 
//as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable (seconds) {
  if(seconds ===  0) {return '00:00:00'}

  let hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;

  if(hours < 10){
    hours = '0' + hours
  }

  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  if(minutes < 10){
    minutes = '0' + minutes
  }

  if(seconds < 10){
    seconds = '0' + seconds
  }

  return `${hours}:${minutes}:${seconds}`
};

console.log(humanReadable(3600));


//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
//The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
  if(parens === ''){return true}

  return parens.length % 2 === 0
};

console.log(validParentheses('()'));


//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
//Additionally, if the number is negative, return 0 (for languages that do have them).

function solution(number){
  let sum = 0;

  for(let i = 0; i < number; i++){
    if(i < 0){return 0}

    if(i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  };

  return sum
}

console.log(solution(10));


//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
//with the same multiplicities (the multiplicity of a member is the number of times it appears). 
//"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

const comp = (array1, array2) => {
  if(array1 === null || array2 === null){return false};

  let res = true;

  for(let i = 0; i < array1.length; i++){
    res = array2.indexOf(array1[i] ** 2) > -1
  }

  return res;
};

const arrA = [121, 144, 19, 161, 19, 144, 19, 11];
const arrB = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(arrA, arrB));