import a from './utils/a'

// 防抖
function debounce(fn, delay) {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

console.log('hello')

const fn = debounce(() => {
  console.log('webpack')
}, 1000)
fn()
