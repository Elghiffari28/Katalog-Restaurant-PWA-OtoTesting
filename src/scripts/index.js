import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.RenderPage()
})

window.addEventListener('load', () => {
  app.RenderPage()
  swRegister()
})

const skipLink = document.querySelector('#skipLink')

skipLink.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('#mainContent').focus()
  }
})
