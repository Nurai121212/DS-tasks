const objects = [
  {
    id: 'Object1',
    name: 'Anna'
  }, {
    id: 'Object2',
    age: 78
  }, {
    id: 'Object3',
    hasHome: false,
    kkkk: 'jjjj'
  }
];

type ObjType = {
  id: string
}

const mapFromArray = <T extends ObjType>(objects : T[]) : {} => {
  return objects.reduce((acc, i) => ({...acc, [i.id]: i}), {})
}

console.log(mapFromArray(objects));