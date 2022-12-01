import API_ENDPOINT from '../globals/api-endpoint'

class RestoSource {
  static async homeRestaurant () {
    const response = await fetch(API_ENDPOINT.HOME_PAGE)
    const responseJson = await response.json()
    return responseJson.restaurants
  };

  // static async favoriteRestaurant() {
  //   const response = await fetch(API_ENDPOINT.FAVORITE);
  //   const responseJson = await response.Json();
  //   return responseJson.restaurants;
  // }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  };
};

export default RestoSource
