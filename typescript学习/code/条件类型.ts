// interface Animal {}
// interface Dog extends Animal {}
// interface Cat extends StreamPipeOptions {}

// type Equal = Dog extends Animal ? string : boolean
// type Unequal = Cat extends Animal ? string : boolean

// interface IdLabel {
//   id: number
// }

// interface NameLabel {
//   name: string
// }

// type getLabel<T extends number | string> = T extends number
//   ? IdLabel
//   : NameLabel

// function createLabel<T extends number | string>(label: T):getLabel<T> {
//     throw 'unimplemented'
// }

// createLabel('abc')
// createLabel(1)

// -------------------------------------------------------------

// // type getMessageType<T> = T['message'] //类型“"message"”无法用于索引类型“T”。

// type getMessageType<T extends { message: unknown }> = T['message']

// interface strMessage{
//     message:string
// }

// // interface NoMessage{
// //     name:string
// // }
// // type ErrorType = getMessageType<NoMessage>
// // //类型“NoMessage”不满足约束“{ message: unknown; }”。
// // // 类型 "NoMessage" 中缺少属性 "message"，但类型 "{ message: unknown; }" 中需要该属性。ts(2344)

// type MessageType = getMessageType<strMessage>

// -------------------------------------------------------

// type getMessageType<T> = T extends { message: unknown } ? T['message'] : boolean

// interface strMessage {
//   message: string
// }

// interface NoMessage {
//   name: string
// }

// type MessageType = getMessageType<strMessage> //type = string
// type NoMessageType = getMessageType<NoMessage> //type = boolean

// ----------------------------------------------------------------

type Flatten<T> = T extends any[] ? T[number] : T

type str = Flatten<number>
type arr = Flatten<string[]>