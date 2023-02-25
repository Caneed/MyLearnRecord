
// const isValid = (str) => {

//   // 如果传入的字符串长度小于二直接返回false
//   if (str.length < 2) return false
//   // 创建栈
//   let stack = []
//   // 遍历字符串
//   for (let i = 0; i < str.length; i++) {
//     const c = str[i]
//     // 如果是左括号则入栈
//     if (c === '(' || c === '[' || c === '{') {
//       stack.push(c)
//     } else {
//       // 如果不是左括号 且栈为空 肯定不是一个有效的括号 返回false
//       if (!stack.length) return false
//       // 拿到最后一个左括号
//       const top = stack[stack.length - 1];
//       // 如果是右括号和左括号能匹配就出栈
//       if ((top === "(" && c === ")") || (top === "{" && c === "}") || (top === "[" && c === "]")) {
//         stack.pop();
//       } else {
//         // 否则就不是一个有效的括号
//         return false
//       }
//     }
//   }
//   return stack.length === 0
// }

// console.log(isValid('{h123132131}'));