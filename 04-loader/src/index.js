import './index.css'
import './less.less'
import './scss.scss'
import './index'

const sum = (...args) => {
  return args.reduce((a, b) => a + b)
}

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const pre1 = new Person('name', 22)
