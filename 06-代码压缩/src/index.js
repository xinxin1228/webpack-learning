import './index.css'

const sum = (a, b) => {
  return a + b
}

const arr = [1, 2, 3]

const arrPro = Promise.allSettled(
  arr.map(item => {
    return Promise.resolve(item)
  })
).then(res => {
  console.log('all', res)
})
