import FavoriteRestoIdb from '../src/scripts/data/favorite-resto'
import * as testFactories from './helpers/testFactories'

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer()
  })

  // eslint-disable-next-line no-undef
  it('Should show the like button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 })

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy()
  })

  // eslint-disable-next-line no-undef
  it('Should not show the unlike button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 })

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy()
  })

  // eslint-disable-next-line no-undef
  it('should be able to like the restaurant', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const resto = await FavoriteRestoIdb.getResto(1)
    // eslint-disable-next-line no-undef
    expect(resto).toEqual({ id: 1 })

    FavoriteRestoIdb.deleteResto(1)
  })

  // eslint-disable-next-line no-undef
  it('Should not add a resto agai when its already liked', async () => {
    await testFactories.createLikeButtonPresenterWithResto({ id: 1 })

    await FavoriteRestoIdb.putResto({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }])
    FavoriteRestoIdb.deleteResto(1)
  })

  // eslint-disable-next-line no-undef
  it('should not add a resto when it has no id', async () => {
    await testFactories.createLikeButtonPresenterWithResto({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
  })
})
