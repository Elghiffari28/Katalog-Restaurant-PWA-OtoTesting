import * as WorkboxWindow from 'workbox-window'
const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker Not Supported in Browser')
    return
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js')

  try {
    await wb.register()
    console.log('Service Worker Registered')
  } catch (error) {
    console.log('Failed to Register Service Worker', error)
  }
}

export default swRegister
