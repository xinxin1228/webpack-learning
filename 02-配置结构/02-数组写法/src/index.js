// 编写两个方法 并导出

const sum = (...rest) => {
  return rest.reduce((a, b) => a + b)
}

const sub = (...rest) => {
  return rest.reduce((a, b) => a - b)
}

export { sum, sub }
