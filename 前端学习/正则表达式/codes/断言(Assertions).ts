/*-------------------------^和$--------------------*/
// console.log(/^A/.test('Abc'))//true
// console.log(/^A/.test('abc'))//false
// console.log(/^A/m.test('abc\nAbc'));//true
// console.log(/A$/.test('bcA'));//true
// console.log(/A$/.test('bca'));//false
// console.log(/A$/m.test('bca\nbcA'));//true
// console.log(/A$/m.test('bcA\nbca'));//true
/*-------------------------\b和\B--------------------*/
// console.log(/\bm/.test('moon'));//true
// console.log(/\bm/.test('nmoon'));//false
// console.log(/m\b/.test('noom'));//true
// console.log(/m\b/.test('noomn'));//false

// console.log(/\bm/.test('.*&^%$#@!()":;[]{}?moon'));//true
// console.log(/m\b/.test('noom.*&^%$#@!()":;[]{}?'));//true

// console.log(/\Bm/.test('moon'));//false
// console.log(/\Bm/.test('nmoon'));//true
// console.log(/m\B/.test('noom'));//false
// console.log(/m\B/.test('noomn'));//true

// console.log(/\Bm/.test('.*&^%$#@!()":;[]{}?moon'));//false
// console.log(/m\B/.test('noom.*&^%$#@!()":;[]{}?'));//false
/*---------------------------先行断言，先行否定断言------------------------*/
// console.log(/abc(?=def)/.test('abcbgxx'));//false
// console.log(/abc(?=def)/.test('abcdef'));//true

// console.log(/abc(?!def)/.test('abcbgxx'));//true
// console.log(/abc(?!def)/.test('abcdef'));//false

/*---------------------------后行断言，后行否定断言------------------------*/

console.log(/(?<=abc)def/.test('abcdef'));//true
console.log(/(?<=abc)def/.test('abcdec'));//false

console.log(/(?<!abc)def/.test('cbadef'));//true
console.log(/(?<!abc)def/.test('abcdef'));//false

