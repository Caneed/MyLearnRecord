// interface Person {
//   name: string
//   age: number
//   isMale: boolean
// }

// type Name = Person['name']
// type Age = Person['age']
// type NameOrAge = Person['name' | 'age']
// type GenderAndName = 'name' | 'isMale'
// type T = Person[GenderAndName]
// type T2=Person[keyof Person]

// -------------------------------------------------

const personArr = [
  { name: 'zs', age: 23 },
  { name: 'zx', age: 23 },
  { name: 'sl', age: 25 },
  { name: 'sz', age: 30 },
]

type Person = (typeof personArr)[number]
type Age = (typeof personArr)[number]['age']

// type Person = {
//     name:string
//     age:number
// }

// type Age = number
