'use strict'

_one(10)
.then(result => {
  console.log('_one: ', result)
  return _two(result)
})
.then(result => {
  console.log('_two: ', result)
  return _three(result)
})
.then(result => {
  console.log('_three: ', result)
})
.catch(error => {
  console.error('error: ', error)
})


function _one(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(number >= 1){
        resolve(number)
      } else {
        reject('number must over than or equal is one.')
      }
    }, 3000)
  })
}

function _two(number) {
  return (number + 2) * 2
}

function _three(number) {
  return new Promise((resolve, reject) => {
    if(number < 50){
      resolve(number)
    } else {
      reject('number is over fifty')
    }
  })
}
