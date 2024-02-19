import svg from '../public/img/note.svg'
import png from '../public/img/note.png'
import jpg from '../public/img/01.jpg'
import gif from '../public/img/gif.gif'

createImage([svg, png, jpg, gif])

function createImage(imgList) {
  const domEl = document.createDocumentFragment()

  imgList.forEach(img => {
    const imgEl = document.createElement('img')
    imgEl.src = img
    domEl.append(imgEl)
  })

  document.body.append(domEl)
}
