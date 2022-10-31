
let s = 'redered'

function func (s) {
  let timer = 0
  for (let i = 0; i < s.length - 2; i++) {
    if (s.substring(i, i + 3) === 'red')
      timer += 1
  }
  if (timer === 2) { console.log('Yes') } 
  if(timer!==2){
    console.log('No')
  }
}

func(s)