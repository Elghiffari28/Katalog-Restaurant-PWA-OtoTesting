Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#query')
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found')
})

Scenario('liking one resto', ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/ ');
  // … kita akan mengisi uji coba berikutnya …
  // I.waitForElement(".resto__title ", 10);

  // pause();
  I.seeElement('.resto__title a');
  I.click(locate('.resto__title a').first());
  // pause();

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
});
