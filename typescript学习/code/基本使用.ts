// type Point = {
//     x:number,
//     y:number
// }

// type Point = number | string;

interface Point {
  x: number
  y: number
}

const ela = document.querySelector('.a') as HTMLCanvasElement

const el = <HTMLAnchorElement>document.querySelector('.acc')

const hola: 'hola' = 'hola'
let gender: 'male' | 'female' = 'male'
gender = 'female'
