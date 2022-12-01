import CONFIG from '../../globals/config'

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto-title">${resto.name}</h2>
  <img class="resto-title__poster" src="${CONFIG.BASE_IMAGE_URL_LAR + resto.pictureId}" alt="Preview Picture in Restaurant ${resto.name}">
  <h3 class="titleDetail">More Information</h3>
  <div class="detail-resto">
    <div class="resto-info">
      <h4>Address</h4>
      <p>${resto.address}</p>
      <h4>City</h4>
      <p>${resto.city}</P>
      <h4>Description</h4>
      <p>${resto.description}</p>
    </div>  
    <div class="resto-menus">
    <h4>Our Menu</h4>
      <div class="resto-menu">
        <div class="Menus"> 
          <h5>Foods</h5>
          ${resto.menus.foods.map(food => {
            return (
                `<div class="menuContainer">
                <ul>
                  <li>${food.name}</li>
                </ul>
                </div>`
            )
          }).join('')}
        </div>
        <div class="Menus">  
          <h5>Drinks</h5>
          ${resto.menus.drinks.map(drink => {
            return (
                `<div class="menuContainer">
                <ul>
                  <li>${drink.name}</li>
                </ul>
                </div>`
            )
          }).join('')}
        </div>
      </div>
    </div>
  </div>
  <div class="costumerReviews">
    <h4>Costumer Reviews</h4>
    <div class="BoxReview">
    ${resto.customerReviews.map(reviews => {
      return (
        `
        <div class="ContentReviews">
          <p class="name">${reviews.name}</p>
          <p class="review">${reviews.review}</p>
          <div class="date">${reviews.date}</div>
        </div>
        `
      )
    }).join('')}
    </div>
  </div>  
`

const createRestoItemTemplate = (resto) => `
<div class="resto-item">
  <div class="resto-item__header">
    <img class="resto-item__poster" alt="Preview Picture in Restaurant ${resto.name || '-'}"
      src="${CONFIG.BASE_IMAGE_URL_MED + resto.pictureId}">
  </div>
  <div class="resto-item__content">
    <p class="resto-item__rating">&#11088; ${resto.rating}<p>
    <h3 class="resto__title"><a class="button-title" href="/#/detail/${resto.id}">${resto.name || '-'}</a></h3>
  </div>
`

const createLikeRestoButtonTemplate = () => `
<button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`

const createUnlikeRestoButtonTemplate = () => `
<button aria-label="unlike this resto" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate
}
