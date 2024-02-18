console.log('hello pwa')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    console.log('page load...')
    let res = await navigator.serviceWorker.register('/service-worker.js')
    console.log(res, 'serviceWorker res')
    if (res) {
      console.log('register success!')
    } else {
      console.log('register fail!')
    }
  })
}
