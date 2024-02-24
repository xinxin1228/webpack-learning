const path = require('node:path')
const fs = require('node:fs')

module.exports = function (source) {
  const { version, webpack } = this
  this.cacheable(false)

  // validate(schema, options, 'Loader')
  // console.log('====== loader =======', version, webpack)

  const newSource = `
  ${source}
  console.log(3333)
  console.log('version', ${version})
  console.log('webpack', ${webpack})
  `

  console.log(this)

  // fs.writeFileSync(path.resolve(__dirname, '1.txt'), JSON.stringify(this))

  return newSource
}
