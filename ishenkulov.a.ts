// эти два метода эмулируют запросы с сервера
// getUserGroups возвращает сгруппированных людей
// getNumberByUserId возвращает некий secretNumber по id

// на выходе нужно получить функцию getUsers, возвращающую массив юзеров такого вида:
// [
//     { id: 3, name: 'Alex', secretNumber: 9 },
//     ...
// ]

// юзеров с чётными number включать в итоговый массив НЕ нужно

const getUserGroups = () => {
  const userGroups = [
    {
      id: 1,
      name: 'Друзья',
      users: [
        { id: 1, name: 'Anna' },
        { id: 3, name: 'Bob' },
        { id: 4, name: 'V' },
      ],
    },
    {
      id: 2,
      name: 'Коллеги',
      users: [
        { id: 7, name: 'Alex' },
        { id: 10, name: 'Max' },
        { id: 11, name: 'X' },
        { id: 14, name: 'Steve' },
        { id: 77, name: 'Lisa' },
        { id: 78, name: 'Mike' },
        { id: 81, name: 'Sam' },
        { id: 89, name: 'John' },
      ],
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(userGroups), 300);
  });
};

const getNumberByUserId = (id : number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(id ** 2), 300);
  });
};

interface IObjArray {
  id: number, 
  name: string, 
  secretNumber: number
}

const getUsers = async () => {
  const allUsers : any = await getUserGroups();
  
  let users : IObjArray[] = [];

  if(allUsers){
    for(let element of allUsers){
      let arr = element.users;
  
      for(let i = 0; i < arr.length; i++){
        if(arr[i].id % 2 === 0){
          const secretNum: any = await getNumberByUserId(arr[i].id);
    
          if(secretNum){
            users.push({
              id: arr[i].id,
              name: arr[i].name,
              secretNumber: secretNum
            })
          }
        }
      }
  
    }
  
  
    if(users){
      console.log(users);
    }
  }
}

getUsers();