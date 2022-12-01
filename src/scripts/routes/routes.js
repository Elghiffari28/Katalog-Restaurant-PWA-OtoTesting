import HomePage from '../views/pages/home'
import Favorite from '../views/pages/favorite'
import Detail from '../views/pages/detail'

const routes = {
  '/': HomePage, // Default Page
  '/home-page': HomePage,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes
