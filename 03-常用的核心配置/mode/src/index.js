// 防抖函数
function debounce(fn, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

const arr = [1, 2, 3]
const arrPro = Promise.allSettled(arr.map(n => Promise.resolve(n)))
