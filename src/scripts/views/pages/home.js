import RestoSource from '../../data/resto-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const HomePage = {
  async render () {
    return `
    <div class="content">
        <div id="restos" class="restos">
        </div>
      </div>
    `
  },

  async afterRender () {
    const restos = await RestoSource.homeRestaurant()
    const restoContainer = document.querySelector('#restos')
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}

export default HomePage
