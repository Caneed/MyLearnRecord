// interface Point {
//   x: number
//   y: number
// }

// type P=keyof Point

// const pointX:P='x'
// const pointY:P='y'
// ------------------------------------------
// interface Arr {
//   [key: number]: string
// }

// type A = keyof Arr

// const a: A = 1
// const b: A = 1

// interface Arr {
//   [key: string]: string
// }

// type A = keyof Arr

// const a: A = 1
// const b: A = 1
// const c: A = "1"

// ------------------------------------

// let s: string = "hello"
// let n: typeof s

// type Predicate = (x: string) => boolean
// type A = ReturnType<Predicate>

// const a: A = false

function returnString() {
  return { a: 1, b: 2 }
}

type A = ReturnType<typeof returnString>

const a: A = { a: 3, b: 4 }
