//Вывести все value в консоль

const linkedList = {
  value: 5,
  next: {
    value: 10,
    next: {
      value: 100,
      next: {
        value: 10000,
        next: {
          value: 20000,
          next: {
            value: 50000,
            next: {
              value: 10000000,
              next: {
                value: 20000000,
                next: {
                  value: 5,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  },
};

function getAllValues(obj){
  let targetObj = obj;
  console.log(targetObj.value);

  if (targetObj.next) getAllValues(targetObj.next);
};

getAllValues(linkedList)