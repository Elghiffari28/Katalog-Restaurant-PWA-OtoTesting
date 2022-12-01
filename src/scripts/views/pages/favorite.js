import FavoriteRestoIdb from '../../data/favorite-resto'
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';
import FavoriteRestoSearchView from './liked-restos/favorite-resto-search-view';

const view = new FavoriteRestoSearchView();
const Favorite = {
  async render () {
    return view.getTemplate();
  },

  async afterRender () {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestos: FavoriteRestoIdb });
  }
}

export default Favorite
