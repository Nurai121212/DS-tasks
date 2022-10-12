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
    setTimeout(() => resolve(userGroups), 1000);
  });
};

const getNumberByUserId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(id ** 2), 1000);
  });
};

const getUsers = async () => {
  const allUsers = await getUserGroups();
  let users = [];

  allUsers.forEach(element => {
    users.push(...element.users)
  });

  let finalUsers = await Promise.all(users = users.map(async item => {
    return {
      id: item.id,
      name: item.name,
      secretNumber: await getNumberByUserId(item.id)
    }
  }))

  console.log(finalUsers.filter(item => item.secretNumber % 2 !== 0 ));
}

getUsers();