const fs = require('fs')

//  fs.open('./hello.txt' ,'r',(err,data)=>{
//   if (err) return console.error(err);
//   console.log(data.toString());
//  })

//  try {
//   fs.openSync('./files/file.txt' ,'r')  
//  } catch (e) {
//   console.error(e)  
//  }


//  stat()

// fs.stat('./files/file.txt',(err,stats)=>{
//   if(err) return
//   console.log(stats)
// })

// Stats {
//   dev: 115640526,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 3377699720571680,
//   size: 5,
//   blocks: 0,
//   atimeMs: 1663730118100.1577,
//   mtimeMs: 1663728198417.9375,
//   ctimeMs: 1663730074657.9763,
//   birthtimeMs: 1663728189924.7966,
//   atime: 2022-09-21T03:15:18.100Z,
//   mtime: 2022-09-21T02:43:18.418Z,
//   ctime: 2022-09-21T03:14:34.658Z,
//   birthtime: 2022-09-21T02:43:09.925Z
// }

// statSync()
let syncStats
try {
  syncStats = fs.statSync('./files/file.txt')
} catch (e) {
  console.log(e)
}
console.log(syncStats)//stats{....}