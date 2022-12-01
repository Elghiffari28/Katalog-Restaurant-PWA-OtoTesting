import FavoriteRestoSearchView from "../src/scripts/views/pages/liked-restos/favorite-resto-search-view";
import FavoriteRestoShowPresenter from "../src/scripts/views/pages/liked-restos/favorite-resto-show-presenter";
import FavoriteRestoIdb from "../src/scripts/data/favorite-resto";

describe('Showing all favorite restos', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };
 
  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restos have been liked', () => {
    xit('should render the information that no restos have been liked', () => {
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
      const presenter = new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
     
      const restos = [];
      presenter._displayRestos(restos);

      expect(document.querySelectorAll('.resto-item__not__found').length)
          .toEqual(1);
    });

    it('should ask for the favorite restos', () => {
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
      expect(favoriteRestos.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restos have been liked', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);
        done();
      });
     
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteRestos.getAllResto.and.returnValues([]);
     
      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
    });
  });

  describe('When favorite restos exist', () => {
    xit('should render the restos', () => {
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
      const presenter = new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
   
      presenter._displayRestos([
        {
          id: 11, 
          name: 'A', 
          vote_average: 3, 
          overview: 'Sebuah resto A',
        },
        {
          id: 22, 
          name: 'B', 
          vote_average: 4, 
          overview: 'Sebuah resto B',
        },
      ]);
   
      expect(document.querySelectorAll('.resto-item').length).toEqual(2);
    });

    it('should show the restos', (done) => {
      document.getElementById('restos').addEventListener('restos:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(2);
        done();
      });
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb, false);
      favoriteRestos.getAllResto.and.returnValues([
        {
          id: 11,
          name: 'A',
          vote_average: 3,
          overview: 'Sebuah resto A',
        },
        {
          id: 22,
          name: 'B',
          vote_average: 4,
          overview: 'Sebuah resto B',
        },
      ]);
      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
    });
  });
});