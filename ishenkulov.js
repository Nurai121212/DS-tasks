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
  const groups = await getUserGroups();
  const users = groups.map(item => item.users).flat();
  const promises = users.map(item => {
    return new Promise((resolve) => {
      resolve(getNumberByUserId(item.id))
    }).then((secretNumber) => ({
      id: item.id,
      name: item.name,
      secretNumber
    }))
  });

  const result = await Promise.all(promises);
  return result.filter(item => item.secretNumber % 2 !== 0)
}

getUsers().then((data) => {
  console.log(data);
})