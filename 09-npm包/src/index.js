// import './index.test'
import lodash from 'lodash'
import { isArray } from './utils/check'
import './style.css'

console.log('lodash', lodash.VERSION)

function deepCopy(obj) {
  if (typeof obj !== 'object') return obj
  if (obj === null) return null

  let newObj = isArray(obj) ? [] : {}

  for (const key in obj) {
    const val = obj[key]

    if (typeof val === 'object') {
      // 如果是类，就不再深拷贝
      if (val?.constructor?.name !== 'Object') {
        newObj[key] = val
      } else {
        newObj[key] = deepCopy(val)
      }
    } else if (typeof val === 'symbol') {
      newObj[key] = Symbol(val.description)
    } else {
      newObj[key] = val
    }
  }

  // 处理key为symbol类型
  const syms = Object.getOwnPropertySymbols(obj)

  syms.forEach(sym => {
    const newSym = Symbol(sym.description)
    newObj[newSym] = deepCopy(obj[sym])
  })

  return newObj
}

function sum(...rest) {
  console.log('sum', rest)
  return rest.reduce((a, b) => a + b)
}

function sub(...rest) {
  return rest.reduce((a, b) => a - b)
}

export { deepCopy, sum, sub }
