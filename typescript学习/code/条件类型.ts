// interface Animal {}
// interface Dog extends Animal {}
// interface Cat extends StreamPipeOptions {}

// type Equal = Dog extends Animal ? string : boolean
// type Unequal = Cat extends Animal ? string : boolean

interface IdLabel {
  id: number
}

interface NameLabel {
  name: string
}

type getLabel<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel

  function createLabel<T extends number|string>(label:T extends number?IdLabel):getLabel<T>{
    throw 'error'
  }

  console.log(createLabel('aaa'))
  console.log(createLabel(123))
