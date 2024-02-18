// import { a } from './a'

// console.log('a.js', a)
import('./a')

export const sum = (...args) => {
  return args.reduce((a, b) => a + b)
}
