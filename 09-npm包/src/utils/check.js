const checkType = type => val => toString.call(val) === `[object ${type}]`

const isString = val => typeof val === 'string'
const isNumber = val => typeof val === 'number'
const isObject = checkType('Object')
const isFunction = checkType('Function')
const { isArray } = Array

export { isString, isNumber, isObject, isFunction, isArray }
