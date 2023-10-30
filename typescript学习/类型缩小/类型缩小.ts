// function embbad(argv: number | string) {
//   argv.slice(-2)
// }
// function embbad(argv: number | string) {
//     if(typeof argv==='string'){
//         argv.slice(-2)
//     }
// }
// ---------------------------------------------------------------------
// function foo(str: string | string[] | null | undefined) {
//   if (str && typeof str === 'object') {
//     str.forEach(item => {})
//   }
// }
// ---------------------------------------------------------------------
// type Bird = {
//   fly: () => void
//   eat: () => void
// }
// type Fish = {
//   swim: () => void
//   eat: () => void
// }

// function ani(animal: Bird | Fish) {
//   if ('swim' in animal) return 'Fish'
//   if ('fly' in animal) return 'Bird'
// }

// let animal: Fish = {
//   swim() {
//     console.log('swim')
//   },
//   eat() {
//     console.log('eat')
//   },
// }
// console.log(ani(animal)) //Fish
// -------------------------------------------------------------

type Bird = {
  fly: () => void
  eat: () => void
}
type Fish = {
  swim: () => void
  eat: () => void
}

declare function getPet(): Bird | Fish
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined
}
let pet: Fish | Bird
pet = {
  fly() {
    console.log('fly')
  },
  eat() {},
}
console.log(isFish(pet)) //false