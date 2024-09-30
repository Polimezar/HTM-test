/* eslint-disable no-undef */
const initSlideOffers = () => {
  let init = false;
  let swiper;

  const swiperCard = ()=> {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        swiper = new Swiper('[data-slide-offers]', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  };

  swiperCard();
  window.addEventListener('resize', swiperCard);
};

export {initSlideOffers};
