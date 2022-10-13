//Вывести правильную и обратную диагональ двумерного массива.

const getDiagonals = (arr) => {
  let rightD = [];
  let reverseD = []

  for(let i = 0; i < arr.length; i++){
    reverseD.push(arr[i][arr.length - i - 1])
  }

  for(let i = 0; i < arr.length; i++){
    rightD.push(arr[i][i])
  }

  return `это правильная диагональ ${rightD} а это обратная ${reverseD}`
}

console.log(getDiagonals([[1,2,3],[4,5,6],[7,8,9]]));