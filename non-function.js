'use strict'

let step = new Promise((resolve, reject) => {
  resolve(10)
})
.then((result) => {
  console.log('[1] result ->', result)
  return new Promise((resolve, reject) => {
    resolve(result * 2)
  })
})
.then((result) => {
  console.log('[2] result ->', result)
  return new Promise((resolve, reject) => {
    if(result > 20){
      reject('this value over twenty')
    }
    resolve(result * 2)
  })
})
.then((result) => {
  console.log('[3] result ->', result)
})
.catch(error => {
  console.error('error: ', error)
})

step.then(() => {
  console.log('final step')
})
