import FavoriteRestoIdb from '../../data/favorite-resto'
import RestoSource from '../../data/resto-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-presenter'
import { createRestoDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
    <div id="resto" class="resto"></div>
    <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await RestoSource.detailRestaurant(url.id)
    const restoContainer = document.querySelector('#resto')
    // const likeButtonContainer = document.querySelector('#likeButtonContainer')

    restoContainer.innerHTML = createRestoDetailTemplate(resto)
    // likeButtonContainer.innerHTML = createLikeButtonTemplate()

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        rating: resto.rating
      }
    })
  }
}

export default Detail
