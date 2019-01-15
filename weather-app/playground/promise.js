let asyncAdd=(a,b)=>{
  return  new Promise(function(resolve, reject) {
    setTimeout(()=>{
      if (typeof a ==="number" && typeof b ==="number") {
        resolve(a+b)
      } else {
        reject('arguments must be numbers')
      }
    },1500)
  });
}

asyncAdd("6",5).then(res=>{
  console.log('result: ',res)
  return asyncAdd(res,39)
}).then(res=>{
  console.log('new res: ',res)
}).catch(error=>{
  console.log(error)
})
// let promise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('lalalal')
//     // reject('some error')
//   },3000)
// })
//
// promise.then((res)=>{
//   console.log(res)
// },(error)=>{
//   console.log(error)
// })
